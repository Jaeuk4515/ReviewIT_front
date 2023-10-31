import styled from "styled-components";
import UserProfile from "../../atoms/UserProfile/UserProfile";

const CommentArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0rem;
  width: 790px;
  height: 100px;
  border-bottom: 1.5px solid rgba(182, 182, 182, .4);
  padding: 10px 0;
  box-sizing: border-box;
`

const UserInfoArea = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 50%;
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
`

const CommentText = styled.p`
  margin: 0;
  padding: 0 20px;
  width: 100%;
  height: auto;
  line-height: 50px;
  display: flex;
  align-itmes: center;
`

export { CommentArea, UserInfoArea, Profile, UserName, WritedTime, CommentText }