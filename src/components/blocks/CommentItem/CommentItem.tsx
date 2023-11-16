import { CommentArea, UserInfoArea, Profile, UserName, WritedTime, CommentText } from "./CommentItem.styles";

export interface CommentItemType {
  userImageUrl: string,
  userName: string,
  time: string,
  text: string
}

export default function CommentItem({ userImageUrl, userName, time, text }: CommentItemType) {
  return (
    <CommentArea>
      <UserInfoArea>
        <Profile className="" url={userImageUrl} onClick={()=>{}} />
        <UserName>{userName}</UserName>
        <WritedTime>{time}</WritedTime>
      </UserInfoArea>
      <CommentText>{text}</CommentText>
    </CommentArea>
  )
}