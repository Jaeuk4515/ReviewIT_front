import styled from "styled-components";
import { SubmitButton } from "../../blocks/CommentForm/CommentForm.styles";
import { HomePage, PageTitle } from "../Home/Home.styles";
import { Img } from "../../atoms/Category/Category.styles";
import { ReactComponent as Options } from "../../../assets/icons/options.svg";
import { ReactComponent as Update } from "../../../assets/icons/update.svg";
import { ReactComponent as Delete } from "../../../assets/icons/delete.svg";

const ReviewDetailPage = styled(HomePage)`
  gap: 2rem;
`

const UserInfoWrapper = styled.div<{theme: "light" | "dark"}>`
  display: flex;
  justify-content: space-between;
  width: 825px;
  padding-bottom: 15px;
  border-bottom: 1px solid ${props => props.theme === "light" ? "rgba(0, 0, 0, .1)" : "rgba(255, 255, 255, .5)"};
`

const ListButton = styled(SubmitButton)`
  margin-right: 15px;
  background-color: #EAEAEA;
  color: black;
  width: 60px;
`

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 855px;
  gap: 2.5rem;
`

const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  width: 100%;
  padding: 0 40px 0 30px;
  box-sizing: border-box;
  margin-bottom: -10px;
  position: relative;
`

const ReviewTitle = styled.h2`
`

const OptionIcon = styled(Options)`
  width: 25px;
  height: 25px;
  cursor: pointer;
  fill: ${({ theme }) => theme.optionIconColor};
`

const MiniModal = styled.div`
  width: 100px;
  height: 70px;
  background-color: ${({ theme }) => theme.backgroundColor};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  box-shadow: 0 0 5px #C4C4C4;
  position: absolute;
  top: 35px; right: 28px;
  z-index: 1800;
  gap: .4rem;
`

const ButtonTitle = styled(PageTitle)`
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: .4;
  }
`

const UpdateIcon = styled(Update)`
  width: 15px;
  height: 17px;
  fill: ${({ theme }) => theme.textColor};
`

const DeleteIcon = styled(Delete)`
  width: 16px;
  height: 17px;
  fill: ${({ theme }) => theme.backgroundColor};
  stroke: ${({ theme }) => theme.textColor};
`

const ContentText = styled.p`
  width: 92%;
  min-width: 787px;
  font-size: 18px;
  line-height: 30px;
  margin-top: 25px;
`

const ExtraInfoWrapper = styled(UserInfoWrapper)`
  justify-content: space-between;
  margin-top: 40px;
`

const LikeyButton = styled.div`
  width: 35px;
  height: 30px;
  border: 1px solid rgba(0, 0, 0, .2);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  cursor: pointer;
  background-color: white;

  &:active {
    transform: scale(1.08);
  }
`

const LikeyIcon = styled(Img)`
  width: 22px;
  height: 18px;
`

const ExtraInfo = styled.div`
  display: flex;
  gap: 1rem;
  margin-right: 20px;
`

const CommentArea = styled(PostContent)`
  gap: 1rem;
  margin-top: 10px;
`

export { ReviewDetailPage, UserInfoWrapper, ListButton, PostContent, ReviewHeader, ReviewTitle, OptionIcon, MiniModal, ButtonTitle, UpdateIcon, DeleteIcon, ContentText, ExtraInfoWrapper, LikeyButton, LikeyIcon, ExtraInfo, CommentArea }