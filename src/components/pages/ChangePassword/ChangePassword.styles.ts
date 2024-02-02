import styled from "styled-components";
import { CompleteButton } from "../ReviewCreate/ReviewCreate.styles";
import { HomePage } from "../Home/Home.styles";

const ChangePasswordPage = styled(HomePage)`
  // height: calc( 100vh - 535px );
  min-height: 450px;
  justify-content: center;
  margin-bottom: 160px;

  @media screen and (max-height: 1000px) {
    margin-bottom: 80px;
  };
  @media screen and (max-height: 700px) {
    margin-bottom: 50px;
  };
`

const PasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  gap: 2rem;

  @media ${({ theme }) => theme.mediaQuery.small} {
    width: 100%;
    max-width: 400px;
    min-width: 300px;
  };
`

const ButtonArea = styled.div`
  display: flex;
  gap: 1rem;
  width: 330px;

  @media ${({ theme }) => theme.mediaQuery.small} {
    width: 82.5%;
    max-width: 330px;
    min-width: 250px;
  };
`

const Btn = styled(CompleteButton)`
  width: 50%;
  height: 35px;
  font-size: 14px;
  margin: 0;
  background-color: ${props => props.buttontype === "cancel" ? "white" : ""};
  border: ${props => props.buttontype === "cancel" ? "1.5px solid rgba(0, 0, 0, .1)" : ""};
`

export { ChangePasswordPage, PasswordForm, ButtonArea, Btn }