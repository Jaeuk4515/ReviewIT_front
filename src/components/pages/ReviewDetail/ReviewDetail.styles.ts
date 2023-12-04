import styled from "styled-components";
import { SubmitButton } from "../../blocks/CommentForm/CommentForm.styles";
import { HomePage, PageTitle } from "../Home/Home.styles";
import { Img } from "../../atoms/Category/Category.styles";

const ReviewDetailPage = styled(HomePage)`
  gap: 2rem;
`

const UserInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 48%;
  min-width: 825px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
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
  width: 50%;
  min-width: 855px;
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

const OptionIcon = styled(Img)`
  width: 25px;
  heigth: 25px;
  cursor: pointer;
`

const MiniModal = styled.div`
  width: 100px;
  height: 70px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  box-shadow: 0 0 5px #C4C4C4;
  position: absolute;
  top: 35px; right: 28px;
  z-index: 20;
  gap: .4rem;
`

const ButtonTitle = styled(PageTitle)`
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: .4;
  }
`

const UpdateIcon = styled(OptionIcon)`
  width: 16px;
  height: 18px;
`

const DeleteIcon = styled(UpdateIcon)`
`

const ContentText = styled.p`
  width: 92%;
  min-width: 787px;
  font-size: 18px;
  line-height: 30px;
  margin-top: 25px;
`

const ExtraInfoWrapper = styled(UserInfoWrapper)`
  justify-content: flex-end;
  margin-top: 40px;
`

const ExtraInfo = styled.div`
  display: flex;
  gap: 1rem;
  padding-right: 20px;
`

const CommentArea = styled(PostContent)`
  gap: 1.5rem;
`

export { ReviewDetailPage, UserInfoWrapper, ListButton, PostContent, ReviewHeader, ReviewTitle, OptionIcon, MiniModal, ButtonTitle, UpdateIcon, DeleteIcon, ContentText, ExtraInfoWrapper, ExtraInfo, CommentArea }