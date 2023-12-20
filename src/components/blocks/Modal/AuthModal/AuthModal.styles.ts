import styled from "styled-components";
import logo from "../../../../assets/icons/logo.svg";
import Input from "../../../atoms/Input/Input";
import { SubmitButton } from "../../CommentForm/CommentForm.styles";
import Divider from "../../../atoms/Divider/Divider";
import google from "../../../../assets/icons/google.svg"

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
  border: 1px solid #C4C4C4;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-color: white;
`

const Logo = styled.div`
  background-image: url(${logo});
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

const InputBox = styled(Input)`
  box-sizing: border-box;
  padding: 0 20px;
  border: none;
  
  &::placeholder {
    color: #A8A8A8;
  }
`

const ErrorText = styled.span`
  height: 14px;
  width: 100%;
  color: #ff1919;
  font-size: 10.5px;
  padding-left: 20px;
`

const ModalButton = styled(SubmitButton)`
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
  color: #4375F5;
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
  color: #4375F5;
  cursor: pointer;
`

const ModalDivider = styled(Divider)`
  border: 1px solid rgba(0, 0, 0, .1);
`

const GoogleLoginButton = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: 10px;
  width: 328px;
  height: 45px;
  margin-top: 15px;
  cursor: pointer;
`

const GoogleLogo = styled(Logo)`
  background-image: url(${google});
  width: 35px;
  height: 35px;
  margin-left: 30px;
`

const GoogleLoginText = styled(NormalText)`
  font-size: 20px;
`

export { ModalBg, Modal, Logo, ModalTitle, InputArea, InputBox, ErrorText, ModalButton, TextArea, FindPasswordText, ModalTypeToggle, NormalText, ToggleLink, ModalDivider, GoogleLoginButton, GoogleLogo, GoogleLoginText }