import styled from "styled-components";
import { PageTitle } from "../../../pages/Home/Home.styles";
import { Logo } from "../AuthModal/AuthModal.styles";
import { ButtonArea } from "../../Header/Header.styles";
import success from "../../../../assets/icons/success.svg";

const ModalBox = styled.div`
  width: 420px;
  height: 420px;
  border: 1px solid #C4C4C4;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-color: ${({ theme }) => theme.backgroundColor};
`

const SuccessMessage = styled(PageTitle)`
  align-items: center;
  height: 80px;
`

const SuccessMark = styled(Logo)`
  background-image: url(${success});
  width: 35px;
  height: 35px;
`

const ButtonWrapper = styled(ButtonArea)`
  flex-direction: column;
`

const LoginButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: 10px;
  width: 328px;
  height: 45px;
  cursor: pointer;
`

export { ModalBox, SuccessMessage, SuccessMark, ButtonWrapper, LoginButton }