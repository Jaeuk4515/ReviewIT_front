import styled from "styled-components";
import { PageTitle } from "../../../pages/Home/Home.styles";
import { Logo, ModalButton, ModalTitle } from "../AuthModal/AuthModal.styles";
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

  @media ${({ theme }) => theme.mediaQuery.small} {
    width: 360px;
    height: 330px;
    gap: 1.2rem;
  };
  @media screen and (max-width: 450px) {
    width: 320px;
    height: 280px;
    gap: .6rem;
  };
  @media screen and (max-width: 400px) {
    width: 270px;
    height: 230px;
    gap: 0;
  };
`

const ModalLogo = styled(Logo)`
  @media ${({ theme }) => theme.mediaQuery.small} {
    width: 170px;
  };
  @media screen and (max-width: 450px) {
    width: 140px;
    min-width: initial;
  };
  @media screen and (max-width: 400px) {
    width: 120px;
  };
`

const SuccessMessage = styled(PageTitle)`
  align-items: center;
  height: 80px;

  @media screen and (max-width: 400px) {
    height: 70px;
  };
`

const SuccessMark = styled(Logo)`
  background-image: url(${success});
  width: 35px;
  height: 35px;

  @media ${({ theme }) => theme.mediaQuery.small} {
    width: 28px;
    height: 28px;
    min-width: initial;
  };
  @media screen and (max-width: 450px) {
    width: 24px;
    height: 24px;
  };
  @media screen and (max-width: 400px) {
    width: 20px;
    height: 20px;
  };
`

const SuccessText = styled(ModalTitle)`
  @media ${({ theme }) => theme.mediaQuery.small} {
    font-size: 21px;
  };
  @media screen and (max-width: 450px) {
    font-size: 18px;
  };
  @media screen and (max-width: 400px) {
    font-size: 15px;
  };
`

const ButtonWrapper = styled(ButtonArea)`
  flex-direction: column;
`

const ConfirmButton = styled(ModalButton)`
  @media ${({ theme }) => theme.mediaQuery.small} {
    width: 280px;
    height: 40px;
    font-size: 18px;
  };
  @media screen and (max-width: 450px) {
    width: 235px;
    height: 35px;
    font-size: 16px;
  };
  @media screen and (max-width: 400px) {
    width: 200px;
    height: 30px;
    font-size: 14px;
  };
`

const LoginButton = styled.div<{buttontheme: "light" | "dark"}>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${props => props.buttontheme === "light" ? "rgba(0, 0, 0, .2)" : "rgba(255, 255, 255, .4)"};
  border-radius: 10px;
  width: 328px;
  height: 45px;
  cursor: pointer;
  background-color: white;

  @media ${({ theme }) => theme.mediaQuery.small} {
    width: 280px;
    height: 38px;
  };
  @media screen and (max-width: 450px) {
    width: 235px;
    height: 33px;
  };
  @media screen and (max-width: 400px) {
    width: 200px;
    height: 28px;
  };
`

const LoginText = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: black;

  @media ${({ theme }) => theme.mediaQuery.small} {
    font-size: 18px;
  };
  @media screen and (max-width: 450px) {
    font-size: 16px;
  };
  @media screen and (max-width: 400px) {
    font-size: 14px;
  };
`

export { ModalBox, ModalLogo, SuccessMessage, SuccessMark, SuccessText, ButtonWrapper, ConfirmButton, LoginButton, LoginText }