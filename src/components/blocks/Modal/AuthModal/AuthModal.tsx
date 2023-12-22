import { useReducer, useState } from "react";
import { 
  ModalBg,
  Modal, 
  Logo, 
  ModalTitle, 
  InputArea, 
  InputBox, 
  ErrorText,
  ModalButton, 
  TextArea, 
  FindPasswordText, 
  ModalTypeToggle, 
  NormalText, 
  ToggleLink,
} from "./AuthModal.styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SuccessModal from "../SuccessModal/SuccessModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/RootState";
import { setModal } from "../../../../store/slices/modalSlice";
import { setLogin } from "../../../../store/slices/loginSlice";

type StateObj = {
  userInfo: {
    nickname: string;
    email: string;
    password: string;
  };
  inputError: {
    nicknameError: string;
    emailError: string;
    passwordError: string;
  };
};

type Action = 
  { type: "infoUpdate"; payload: { name: string; value: string; } }
  | { type: "errorUpdate"; payload: { name: string; value: string; } }
  | { type: "infoInit"; payload: StateObj }
  | { type: "errorInit"; payload: StateObj['inputError'] };

const reducer = (state: StateObj, action: Action) => {
  switch (action.type) {
    case "infoUpdate":
      return { ...state, userInfo: { ...state.userInfo, [ action.payload.name ]: action.payload.value } };
    case "errorUpdate":
      return { ...state, inputError: { ...state.inputError, [ action.payload.name ]: action.payload.value } };
    case "infoInit":
      return { ...action.payload };
    case "errorInit":
      return { ...state, inputError: action.payload }
    default:
      return state;
  };
};

const initialState = {
  userInfo: {
    nickname: "",
    email: "",
    password: ""
  },
  inputError: {
    nicknameError: "",
    emailError: "",
    passwordError: ""
  }
};

export default function AuthModal() {
  const navigate = useNavigate();
  const { modal } = useSelector((state: RootState) => state.modal);
  const Dispatch = useDispatch();
  const [ inputInfo, dispatch ] = useReducer(reducer, initialState);
  const [ success, setSuccess ] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    dispatch({ type: "infoUpdate", payload: { name, value: e.target.value } });

    if (modal === "signup") {
      const nicknameWhitespace = /\s/.test(inputInfo.userInfo.nickname);
      const emailWhitespace = /\s/.test(inputInfo.userInfo.email);
      const passwordWhitespace = /\s/.test(inputInfo.userInfo.password);
      
      if (nicknameWhitespace) {
        dispatch({ type: "errorUpdate", payload: { name: "nicknameError", value: "공백은 포함될 수 없습니다." } });
      } else {
        dispatch({ type: "errorUpdate", payload: { name: "nicknameError", value: "" } });
      };
      if (emailWhitespace) {
        dispatch({ type: "errorUpdate", payload: { name: "emailError", value: "공백은 포함될 수 없습니다." } });
      } else {
        dispatch({ type: "errorUpdate", payload: { name: "emailError", value: "" } });
      };
      if (passwordWhitespace) {
        dispatch({ type: "errorUpdate", payload: { name: "passwordError", value: "공백은 포함될 수 없습니다." } });
      } else {
        dispatch({ type: "errorUpdate", payload: { name: "passwordError", value: "" } });
      };
    };
  };

  const handleModal = () => {
    if (modal === "login") Dispatch(setModal("signup"));
    if (modal === "signup") Dispatch(setModal("login"));
    dispatch({ type: "infoInit", payload: initialState });
  };

  const handleClick = () => {
    navigate("/new-password");
    Dispatch(setModal(""));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (modal === "signup") {
      e.preventDefault();
      const { nickname, email, password } = inputInfo.userInfo;
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputInfo.userInfo.email);

      const errors: { name: string; value: string }[] = [];

      if (!nickname || !email || !password) return;
      if (!isEmailValid) errors.push({ name: "emailError", value: "이메일 형식에 맞게 작성해주세요." });
      if (nickname.length > 8) errors.push({ name: "nicknameError", value: "닉네임은 8글자 이하여야 합니다." });
      if (password.length < 8) errors.push({ name: "passwordError", value: "비밀번호는 8글자 이상이어야 합니다." });

      if (errors.length > 0) {
        errors.forEach((error) => {
          dispatch({ type: "errorUpdate", payload: error });
        });
        return;
      };

      const response = await axios.post("http://localhost:3001/user/register", inputInfo.userInfo, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      console.log(response.data);

      if (response.data.message === '사용중인 이메일입니다.') {
        dispatch({ type: 'errorUpdate', payload: { name: "emailError", value: response.data.message } });
        return;
      };

      if (response.data.message === '사용중인 닉네임입니다.') {
        dispatch({ type: 'errorUpdate', payload: { name: "nicknameError", value: response.data.message } });
        return;
      };

      if (response.data.message === "success") {
        setSuccess(true);
        dispatch({ type: "infoInit", payload: initialState });
        return;
      };
    };

    if (modal === "login") {
      e.preventDefault();
      const loginInfo = { email: inputInfo.userInfo.email, password: inputInfo.userInfo.password };
      dispatch({ type: "errorInit", payload: initialState.inputError });
      if (!loginInfo.email || !loginInfo.password) return;
      const response = await axios.post("http://localhost:3001/user/login", loginInfo, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      });
      console.log(response);
      if (response.data.message === "가입되지 않은 회원입니다.") {
        dispatch({ type: "errorUpdate", payload: { name: "emailError", value: response.data.message } });
        return;
      };
      if (response.data.message === "비밀번호가 일치하지 않습니다.") {
        console.log('1');
        dispatch({ type: "errorUpdate", payload: { name: "passwordError", value: response.data.message } });
        return;
      };
      Dispatch(setModal(""));
      Dispatch(setLogin(true));
    };
  };

  return (
    <>
    {!success ? 
      <ModalBg onClick={() => { Dispatch(setModal("")) }}>
        <Modal modaltype={modal as "login" | "signup"} onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit} >
          <Logo />
          <ModalTitle>{modal === "login" ? "로그인" : "회원가입"}</ModalTitle>
          <InputArea>
            {modal === "signup" && <InputBox type="text" className="" color="#F0F0F0" width="330px" height="45px" placeholder="닉네임" name="nickname" value={inputInfo.userInfo.nickname} onChange={(e) => handleChange(e, "nickname")} />}
            {modal === "signup" && <ErrorText>{inputInfo.inputError.nicknameError}</ErrorText>}
            <InputBox type="text" className="" color="#F0F0F0" width="330px" height="45px" placeholder="이메일" name="email" value={inputInfo.userInfo.email} onChange={(e)=>handleChange(e, "email")} />
            {modal === "signup" && <ErrorText>{inputInfo.inputError.emailError}</ErrorText>}
            {modal === "login" && <ErrorText>{inputInfo.inputError.emailError}</ErrorText>}
            <InputBox type="password" className="" color="#F0F0F0" width="330px" height="45px" placeholder="비밀번호" name="password" value={inputInfo.userInfo.password} onChange={(e)=>handleChange(e, "password")} />
            {modal === "signup" && <ErrorText>{inputInfo.inputError.passwordError}</ErrorText>}
            {modal === "login" && <ErrorText>{inputInfo.inputError.passwordError}</ErrorText>}
            <ModalButton>{modal === "login" ? "로그인" : "회원가입"}</ModalButton>
          </InputArea>
          <TextArea>
            {modal === "login" && <FindPasswordText onClick={handleClick}>비밀번호를 잊어버리셨나요?</FindPasswordText>}
            <ModalTypeToggle>
              <NormalText>{modal === "login" ? "계정이 없으신가요?" : "이미 가입하셨나요?"}</NormalText>
              <ToggleLink onClick={handleModal}>{modal === "login" ? "회원가입" : "로그인"}</ToggleLink>
            </ModalTypeToggle>
          </TextArea>
        </Modal>
      </ModalBg> : <SuccessModal setsuccess={setSuccess} mode="signup" />
    }
    </>
  )
}