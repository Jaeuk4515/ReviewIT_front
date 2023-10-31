import styled from "styled-components";
import { Logo } from "../AuthModal/AuthModal.styles";
import { SubmitButton } from "../CommentForm/CommentForm.styles";
import write from "../../../assets/icons/write.svg";
import UserProfile from "../../atoms/UserProfile/UserProfile";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeaderArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 100%;
`

const HeaderLogo = styled(Logo)`
  width: 160px;
  height: 35px;
`

const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .6rem;
`

const HeaderButton = styled(SubmitButton)<{buttonType: "login" | "signup"}>`
  background-color: ${props => props.buttonType === "login" ? "white" : "#E8F2FF"};
  color: ${props => props.buttonType === "login" ? "black" : "#256FFF"};
  border: ${props => props.buttonType === "login" ? "1px solid rgba(0, 0, 0, .1)" : "none"};
  height: 35px;
  width: 80px;
  font-size: 15px;
`

const WriteReviewButton = styled(SubmitButton)`
  background-color: #256FFF;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .3rem;
  width: 100px;
  height: 35px;
  font-size: 15px;
  margin-right: 10px;
`

const WriteIcon = styled(Logo)`
  background-image: url(${write});
  width: 15px;
  height: 15px;
  margin-right: 2px;
`

const Profile = styled(UserProfile)`
  width: 40px;
  height: 40px;
  cursor: pointer;
`

export { HeaderWrapper, HeaderArea, HeaderLogo, ButtonArea, HeaderButton, WriteReviewButton, WriteIcon, Profile }