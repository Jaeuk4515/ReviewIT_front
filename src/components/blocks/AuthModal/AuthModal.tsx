import { useReducer, useState } from "react";
import { 
  ModalBg,
  Modal, 
  Logo, 
  ModalTitle, 
  InputArea, 
  InputBox, 
  ModalButton, 
  TextArea, 
  FindPasswordText, 
  ModalTypeToggle, 
  NormalText, 
  ToggleLink, 
  ModalDivider, 
  GoogleLoginButton, 
  GoogleLogo, 
  GoogleLoginText 
} from "./AuthModal.styles";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

interface AuthModalType {
  modalType: "login" | "signup";
  state: "login" | "signup" | "";
  setState(state: "login" | "signup" | ""): void;
}

type stateObj = {
  nickname: string;
  email: string;
  password: string;
}

type Action = {
  type: "update";
  payload: {
    name: string;
    value: string;
  }
}

const reducer = (state: stateObj, action: Action) => {
  switch (action.type) {
    case "update":
      return { ...state, [action.payload.name]: action.payload.value };
    default:
      return state;
  }
}

const initialState = {
  nickname: "",
  email: "",
  password: ""
}

export default function AuthModal({ modalType, state, setState }: AuthModalType) {
  const navigate = useNavigate();
  const [ modal, setModal ] = useState<"login" | "signup">(modalType);
  const [ userInfo, dispatch ] = useReducer(reducer, initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    dispatch({ type: "update", payload: { name, value: e.target.value } });
  }

  const handleModal = () => {
    if (modal === "login") setModal("signup");
    if (modal === "signup") setModal("login");
  }

  const handleClick = () => {
    navigate("/new-password");
    setState("");
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:3001/signup", userInfo, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.data);
    if (response.data.message === "success") {
      console.log("회원가입 성공!");
      navigate("/");
      return;
    }
  }

  console.log(userInfo);

  return (
    <ModalBg onClick={() => { setState("") }}>
      <Modal modaltype={modal} onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit} >
        <Logo />
        <ModalTitle>{modal === "login" ? "로그인" : "회원가입"}</ModalTitle>
        <InputArea>
          {modal === "signup" && <InputBox type="text" className="" color="#F0F0F0" width="330px" height="45px" placeholder="닉네임" name="nickname" value={userInfo.nickname} onChange={(e) => handleChange(e, "nickname")} />}
          <InputBox type="email" className="" color="#F0F0F0" width="330px" height="45px" placeholder="이메일" name="email" value={userInfo.email} onChange={(e)=>handleChange(e, "email")} />
          <InputBox type="password" className="" color="#F0F0F0" width="330px" height="45px" placeholder="비밀번호" name="password" value={userInfo.password} onChange={(e)=>handleChange(e, "password")} />
          <ModalButton>{modal === "login" ? "로그인" : "회원가입"}</ModalButton>
        </InputArea>
        <TextArea>
          {modal === "login" && <FindPasswordText onClick={handleClick}>비밀번호를 잊어버리셨나요?</FindPasswordText>}
          <ModalTypeToggle>
            <NormalText>{modal === "login" ? "계정이 없으신가요?" : "이미 가입하셨나요?"}</NormalText>
            <ToggleLink onClick={handleModal}>{modal === "login" ? "회원가입" : "로그인"}</ToggleLink>
          </ModalTypeToggle>
        </TextArea>
        <ModalDivider className="" width="350px" />
        <GoogleLoginButton>
          <GoogleLogo />
          <GoogleLoginText>구글 계정으로 로그인</GoogleLoginText>
        </GoogleLoginButton>
      </Modal>
    </ModalBg>
  )
}