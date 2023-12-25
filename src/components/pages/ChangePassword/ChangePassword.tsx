import { useReducer, useState } from "react";
import { ErrorText, InputArea, InputBox, ModalTitle } from "../../blocks/Modal/AuthModal/AuthModal.styles";
import { ChangePasswordPage, PasswordForm, ButtonArea, Btn } from "./ChangePassword.styles";
import axios from "axios";
import SuccessModal from "../../blocks/Modal/SuccessModal/SuccessModal";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/RootState";
import { useNavigate } from "react-router-dom";

type StateObj = {
  userInfo: {
    email: string;
    newPassword: string;
    confirmPassword: string;
  },
  inputError: {
    emailError: string;
    newPasswordError: string;
    confirmPasswordError: string;
  }
};

type Action = 
  { type: "infoUpdate"; payload: { name: string; value: string; } }
  | { type: "errorUpdate"; payload: { name: string; value: string; } }

const reducer = (state: StateObj, action: Action) => {
  switch (action.type) {
    case "infoUpdate":
      return { ...state, userInfo: { ...state.userInfo, [ action.payload.name ]: action.payload.value } };
    case "errorUpdate":
      return { ...state, inputError: { ...state.inputError, [ action.payload.name ]: action.payload.value } };
  };
};

const initialState: StateObj = {
  userInfo: {
    email: "",
    newPassword: "",
    confirmPassword: ""
  },
  inputError: {
    emailError: "",
    newPasswordError: "",
    confirmPasswordError: ""
  }
};

export default function ChangePassword() {
  const [ inputInfo, dispatch ] = useReducer(reducer, initialState);
  const [ success, setSuccess ] = useState(false);
  const { theme } = useSelector((state: RootState) => state.theme);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    dispatch({ type: "infoUpdate", payload: { name, value: e.target.value } });

    const emailWhitespace = /\s/.test(inputInfo.userInfo.email);
    const newPasswordWhitespace = /\s/.test(inputInfo.userInfo.newPassword);
    const confirmPasswordWhitespace = /\s/.test(inputInfo.userInfo.confirmPassword);

    if (emailWhitespace) {
      dispatch({ type: "errorUpdate", payload: { name: "emailError", value: "공백은 포함될 수 없습니다." } });
    } else {
      dispatch({ type: "errorUpdate", payload: { name: "emailError", value: "" } });
    };
    if (newPasswordWhitespace) {
      dispatch({ type: "errorUpdate", payload: { name: "newPasswordError", value: "공백은 포함될 수 없습니다." } });
    } else {
      dispatch({ type: "errorUpdate", payload: { name: "newPasswordError", value: "" } });
    };
    if (confirmPasswordWhitespace) {
      dispatch({ type: "errorUpdate", payload: { name: "confirmPasswordError", value: "공백은 포함될 수 없습니다." } });
    } else {
      dispatch({ type: "errorUpdate", payload: { name: "confirmPasswordError", value: "" } });
    };
  };

  const handleBlur = (name: string) => {
    const { email, newPassword, confirmPassword } = inputInfo.userInfo;
    if (name === "email") {
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (email && !isEmailValid) dispatch({ type: "errorUpdate", payload: { name: "emailError", value: "이메일 형식에 맞게 작성해주세요." } });
      return;
    };
    if (name === "newPassword") {
      if (newPassword && newPassword.length < 8) dispatch({ type: "errorUpdate", payload: { name: "newPasswordError", value: "비밀번호는 8글자 이상이어야 합니다."} });
      return;
    };
    if (name === "confirmPassword") {
      if (confirmPassword && (newPassword !== confirmPassword)) dispatch({ type: "errorUpdate", payload: { name: "confirmPasswordError", value: "확인 비밀번호가 일치하지 않습니다."} });
      return;
    };
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputInfo.userInfo.email || !inputInfo.userInfo.newPassword || !inputInfo.userInfo.confirmPassword) return;
    const response = await axios.patch("http://localhost:3001/user/change-password", inputInfo.userInfo, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (response.data.message === "확인 비밀번호가 일치하지 않습니다.") {
      dispatch({ type: "errorUpdate", payload: { name: "confirmPasswordError", value: "확인 비밀번호가 일치하지 않습니다." } });
      return;
    };
    if (response.data.message === "해당 이메일을 가진 유저가 존재하지 않습니다.") {
      dispatch({ type: "errorUpdate", payload: { name: "emailError", value: "해당 이메일을 가진 유저가 존재하지 않습니다." } });
      return;
    };
    if (response.data.message === "success") {
      setSuccess(true);
      return;
    }
  };

  return (
    <ChangePasswordPage>
      <PasswordForm onSubmit={handleSubmit}>
        <ModalTitle>비밀번호 변경</ModalTitle>
        <InputArea>
          <InputBox theme={theme} type="text" className="" color="#F0F0F0" width="330px" height="45px" placeholder="이메일을 입력하세요" name="email" 
            value={inputInfo.userInfo.email} 
            onChange={(e)=>{ handleChange(e, "email") }} 
            onBlur={() => handleBlur("email")}
          />
          <ErrorText>{inputInfo.inputError.emailError}</ErrorText>
          <InputBox theme={theme} type="password" className="" color="#F0F0F0" width="330px" height="45px" placeholder="새 비밀번호를 입력하세요" name="newPassword" 
            value={inputInfo.userInfo.newPassword} 
            onChange={(e)=>{ handleChange(e, "newPassword") }}
            onBlur={() => handleBlur("newPassword")}
          />
          <ErrorText>{inputInfo.inputError.newPasswordError}</ErrorText>
          <InputBox theme={theme} type="password" className="" color="#F0F0F0" width="330px" height="45px" placeholder="새 비밀번호 확인" name="confirmPassword" 
            value={inputInfo.userInfo.confirmPassword} 
            onChange={(e)=>{ handleChange(e, "confirmPassword") }}
            onBlur={() => handleBlur("confirmPassword")}
          />
          <ErrorText>{inputInfo.inputError.confirmPasswordError}</ErrorText>
        </InputArea>
        <ButtonArea>
          <Btn buttontype="cancel" type="button" onClick={() => navigate(-1)}>취소</Btn>
          <Btn buttontype="write" type="submit">확인</Btn>
        </ButtonArea>
      </PasswordForm>
      {success && <SuccessModal setsuccess={setSuccess} mode="changepassword" />}
    </ChangePasswordPage> 
  )
}