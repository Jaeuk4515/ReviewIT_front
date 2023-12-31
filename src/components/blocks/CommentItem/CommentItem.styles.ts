import styled from "styled-components";
import UserProfile from "../../atoms/UserProfile/UserProfile";
import { DeleteIcon } from "../../pages/ReviewDetail/ReviewDetail.styles";

const CommentArea = styled.div`
  display: flex;
  flex-direction: column;
  // gap: .8rem;
  justify-content: center;
  width: 790px;
  min-height: 100px;
  height: auto;
  padding: 16px 20px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.commentColor};
  border-radius: 15px;
  position: relative;
`

const UserInfoArea = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 50%;
  padding-left: 5px;
`

const Profile = styled(UserProfile)`
  width: 30px;
  height: 30px;
`

const UserName = styled.span`
  font-weight: bold;
  font-size: 18px;
`

const WritedTime = styled.span`
  color: #929292;
  padding-left: 10px;
  font-size: 14px;
`

const CommentText = styled.p`
  margin: 12px 0 0 0;
  padding: 0 10px;
  width: 97%;
  height: auto;
  display: flex;
  align-items: center;
  line-height: 23px;
`

const DeleteButton = styled(DeleteIcon)`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 18px; right: 24px;
  opacity: .5;

  &:hover {
    opacity: .3;
  }
`

export { CommentArea, UserInfoArea, Profile, UserName, WritedTime, CommentText, DeleteButton }