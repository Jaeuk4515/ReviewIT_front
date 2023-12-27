import styled, { keyframes, css } from "styled-components";
import { Logo } from "../Modal/AuthModal/AuthModal.styles";
import { SubmitButton } from "../CommentForm/CommentForm.styles";
import { ReactComponent as Write } from "../../../assets/icons/write.svg";
import UserProfile from "../../atoms/UserProfile/UserProfile";
import light_mode from "../../../assets/icons/light_mode.svg";
import dark_mode from "../../../assets/icons/dark_mode.svg";

const themeTrans = keyframes`
  0%{
    transform: scale(0.6) rotate(180deg);
  }
  100%{
    transform: scale(1) rotate(360deg);
  }
`

const HeaderWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.headerColor};
  color: ${({ theme }) => theme.textColor};
  border-bottom: 1px solid rgba(0, 0, 0, .05);
  z-index: 1000;
`

const HeaderArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 100%;
`

const HeaderLogo = styled(Logo)<{theme: "light" | "dark"}>`
  width: 160px;
  height: 35px;
  cursor: pointer;
`

const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .6rem;
`

const ThemeButton = styled.div<{theme: "light" | "dark", animate: "on" | "off"}>`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;

  &:hover {
    background-color: ${props => props.theme === "light" ? "#f0f0f0" : "#4a4a4a"};
  }

  ${props => props.animate === "on" &&
    css`
      animation: ${themeTrans} .2s linear;
    `
  }
`

const ThemeIcon = styled.div<{theme: "light" | "dark"}>`
  background-image: url(${props => props.theme === "light" ? light_mode : dark_mode});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: ${props => props.theme === "light" ? "25px" : "20px"};
  height: ${props => props.theme === "light" ? "25px" : "20px"};
`

const LoginButton = styled(SubmitButton)<{colorTheme: "light" | "dark"}>`
  background-color: ${({ theme }) => theme.loginButtonColor};
  color: ${({ theme }) => theme.loginTextColor};
  border: 1px solid ${props => props.colorTheme === "light" ? "rgba(0, 0, 0, .2)" : "white"};
  height: 35px;
  width: 80px;
  font-size: 15px;
`

const RegisterButton = styled(SubmitButton)`
  background-color: ${({ theme }) => theme.registerButtonColor};
  color: ${({ theme }) => theme.registerTextColor};
  height: 35px;
  width: 80px;
  font-size: 15px;
`

const WriteReviewButton = styled(SubmitButton)`
  background-color: ${({ theme }) => theme.writeButtonColor};
  color: ${({ theme }) => theme.writeTextColor};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .3rem;
  width: 100px;
  height: 35px;
  font-size: 15px;
  margin-right: 10px;
`

const WriteIcon = styled(Write)`
  width: 15px;
  height: 15px;
  margin-right: 2px;
  fill: white;
`

const Profile = styled(UserProfile)`
  width: 40px;
  height: 40px;
  cursor: pointer;
`

export { HeaderWrapper, HeaderArea, HeaderLogo, ButtonArea, ThemeButton, ThemeIcon, LoginButton, RegisterButton, WriteReviewButton, WriteIcon, Profile }