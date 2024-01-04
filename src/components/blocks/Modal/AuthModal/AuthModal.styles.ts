import styled from "styled-components";
import logo_light from "../../../../assets/icons/logo_light.svg";
import logo_dark from "../../../../assets/icons/logo_dark.svg";
import Input from "../../../atoms/Input/Input";
import { SubmitButton } from "../../CommentForm/CommentForm.styles";

const ModalBg = styled.div`
  position: fixed;
  top: 0; bottom: 0;
  left: 0; right: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`

const Modal = styled.form<{modaltype: "login" | "signup"}>`
  width: 420px;
  height: ${props => props.modaltype === "login" ? "550px" : "605px"};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-color: ${({ theme }) => theme.headerColor};
`

const Logo = styled.div<{logotheme: "light" | "dark"}>`
  background-image: url(${props => props.logotheme === "light" ? logo_light : logo_dark});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 200px;
  height: 45px;
`

const ModalTitle = styled.span`
  font-size: 25px;
  font-weight: bold;
`

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .4rem;
`

const InputBox = styled(Input)<{theme: "light" | "dark"}>`
  box-sizing: border-box;
  padding: 0 20px;
  border: none;
  background-color: ${props => props.theme === "light" ? "#F0F0F0" : "#626265"};
  color: ${props => props.theme === "light" ? "black" : "white"};
  
  &::placeholder {
    color: #A8A8A8;
  }
`

const ErrorText = styled.span`
  height: 14px;
  width: 100%;
  color: ${({ theme }) => theme.errorTextColor};
  font-size: 10.5px;
  padding-left: 20px;
`

const ModalButton = styled(SubmitButton)`
  background-color: ${({ theme }) => theme.modalButtonColor};
  width: 330px;
  height: 45px;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  margin-top: 10px;
`

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .2rem;
`

const FindPasswordText = styled.span`
  color: ${({ theme }) => theme.modalLinkText};
  cursor: pointer;
`

const ModalTypeToggle = styled.div`
  display: flex;
  gap: 1rem;
`

const NormalText = styled.span`
  color: #909090;
`

const ToggleLink = styled.span`
  color: ${({ theme }) => theme.modalLinkText};
  cursor: pointer;
`

export { ModalBg, Modal, Logo, ModalTitle, InputArea, InputBox, ErrorText, ModalButton, TextArea, FindPasswordText, ModalTypeToggle, NormalText, ToggleLink }