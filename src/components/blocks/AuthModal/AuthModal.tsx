import { useState } from "react";
import { 
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

export default function AuthModal({ modalType }: {modalType: "login" | "signup"}) {
  const [modal, setModal] = useState<"login" | "signup">(modalType);

  const handleModal = () => {
    if (modal === "login") setModal("signup");
    if (modal === "signup") setModal("login");
  }

  return (
    <Modal action="#" method="post" modalType={modal}>
      <Logo />
      <ModalTitle>{modal === "login" ? "로그인" : "회원가입"}</ModalTitle>
      <InputArea>
        {modal === "signup" && <InputBox className="" color="#F0F0F0" width="330px" height="45px" placeholder="이름" />}
        <InputBox className="" color="#F0F0F0" width="330px" height="45px" placeholder="아이디" />
        <InputBox className="" color="#F0F0F0" width="330px" height="45px" placeholder="비밀번호" />
        <ModalButton>{modal === "login" ? "로그인" : "회원가입"}</ModalButton>
      </InputArea>
      <TextArea>
        {modal === "login" && <FindPasswordText>비밀번호를 잊어버리셨나요?</FindPasswordText>}
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
  )
}