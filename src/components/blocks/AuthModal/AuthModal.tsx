import { useState } from "react";
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

interface AuthModalType {
  modalType: "login" | "signup";
  state: "login" | "signup" | "";
  setState(state: "login" | "signup" | ""): void;
}

export default function AuthModal({ modalType, state, setState }: AuthModalType) {
  const navigate = useNavigate();

  const [modal, setModal] = useState<"login" | "signup">(modalType);
  let path = modalType === "login" ? "/login" : "/signup";

  const handleModal = () => {
    if (modal === "login") setModal("signup");
    if (modal === "signup") setModal("login");
  }

  const handleClick = () => {
    navigate("/change_password");
    setState("");
  }

  return (
    <ModalBg onClick={() => { setState("") }}>
      <Modal action={path} method="post" modalType={modal} onClick={(e) => e.stopPropagation()} >
        <Logo />
        <ModalTitle>{modal === "login" ? "로그인" : "회원가입"}</ModalTitle>
        <InputArea>
          {modal === "signup" && <InputBox className="" color="#F0F0F0" width="330px" height="45px" placeholder="이름" />}
          <InputBox className="" color="#F0F0F0" width="330px" height="45px" placeholder="아이디" />
          <InputBox className="" color="#F0F0F0" width="330px" height="45px" placeholder="비밀번호" />
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