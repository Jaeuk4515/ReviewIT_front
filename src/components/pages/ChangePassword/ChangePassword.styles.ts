import styled from "styled-components";
import { CompleteButton } from "../ReviewCreate/ReviewCreate.styles";
import { HomePage } from "../Home/Home.styles";

const ChangePasswordPage = styled(HomePage)`
  height: calc( 100vh - 522px );
  justify-content: center;
  margin-bottom: 160px;
`

const PasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  gap: 2rem;
`

const ButtonArea = styled.div`
  display: flex;
  gap: 1rem;
  width: 330px;
`

const Btn = styled(CompleteButton)`
  width: 50%;
  margin: 0;
  background-color: ${props => props.buttonType === "cancel" ? "white" : ""};
  border: ${props => props.buttonType === "cancel" ? "1.5px solid rgba(0, 0, 0, .1)" : ""};
`

export { ChangePasswordPage, PasswordForm, ButtonArea, Btn }