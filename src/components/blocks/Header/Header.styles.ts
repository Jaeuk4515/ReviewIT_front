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

  @media ${({ theme }) => theme.mediaQuery.small} {
    width: 90%;
  };
`

const HeaderLogo = styled(Logo)<{logotheme: "light" | "dark"}>`
  width: 160px;
  height: 35px;
  cursor: pointer;

  @media ${({ theme }) => theme.mediaQuery.small} {
    width: 120px;
    min-width: 120px;
  };
`

const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .6rem;

  @media ${({ theme }) => theme.mediaQuery.small} {
    gap: .2rem;
  }
`

const ThemeButton = styled.div<{buttontheme: "light" | "dark", animate: "on" | "off"}>`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;

  &:hover {
    background-color: ${props => props.buttontheme === "light" ? "#f0f0f0" : "#4a4a4a"};
  }

  ${props => props.animate === "on" &&
    css`
      animation: ${themeTrans} .2s linear;
    `
  }

  @media ${({ theme }) => theme.mediaQuery.small} {
    margin-right: 0px;
  };
`

const ThemeIcon = styled.div<{theme: "light" | "dark"}>`
  background-image: url(${props => props.theme === "light" ? light_mode : dark_mode});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: ${props => props.theme === "light" ? "25px" : "20px"};
  height: ${props => props.theme === "light" ? "25px" : "20px"};
`

const LoginButton = styled(SubmitButton)<{colortheme: "light" | "dark"}>`
  background-color: ${({ theme }) => theme.loginButtonColor};
  color: ${({ theme }) => theme.loginTextColor};
  border: 1px solid ${props => props.colortheme === "light" ? "rgba(0, 0, 0, .2)" : "white"};
  height: 35px;
  width: 80px;
  font-size: 15px;
  
  @media ${({ theme }) => theme.mediaQuery.small} {
    width: 45px;
    font-size: 12px;
  };
`

const RegisterButton = styled(SubmitButton)`
  background-color: ${({ theme }) => theme.registerButtonColor};
  color: ${({ theme }) => theme.registerTextColor};
  height: 35px;
  width: 80px;
  font-size: 15px;

  @media ${({ theme }) => theme.mediaQuery.small} {
    width: 55px;
    font-size: 12px;
  };
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

  @media ${({ theme }) => theme.mediaQuery.small} {
    width: 80px;
    font-size: 12.5px;
  };
`

const WriteIcon = styled(Write)`
  width: 15px;
  height: 15px;
  margin-right: 2px;
  fill: white;

  @media ${({ theme }) => theme.mediaQuery.small} {
    width: 12px;
    height: 12px;
  };
`

const Profile = styled(UserProfile)`
  width: 40px;
  height: 40px;
  cursor: pointer;
`

export { HeaderWrapper, HeaderArea, HeaderLogo, ButtonArea, ThemeButton, ThemeIcon, LoginButton, RegisterButton, WriteReviewButton, WriteIcon, Profile }