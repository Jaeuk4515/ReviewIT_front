import styled from "styled-components";
import { SubmitButton } from "../../blocks/CommentForm/CommentForm.styles";
import { HomePage } from "../Home/Home.styles";

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
  gap: 2rem;
`

const ReviewTitle = styled.h2`
  width: 100%; 
  padding-left: 6%;
`

const ContentText = styled.p`
  width: 92%;
  min-width: 787px;
  font-size: 18px;
  line-height: 30px;
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

export { ReviewDetailPage, UserInfoWrapper, ListButton, PostContent, ReviewTitle, ContentText, ExtraInfoWrapper, ExtraInfo, CommentArea }