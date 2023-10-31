import { CommentArea, UserInfoArea, Profile, UserName, WritedTime, CommentText } from "./CommentItem.styles";

interface CommentItemType {
  url: string,
  name: string,
  time: string,
  text: string
}

export default function CommentItem({ url, name, time, text }: CommentItemType) {
  return (
    <CommentArea>
      <UserInfoArea>
        <Profile className="" url={url} />
        <UserName>{name}</UserName>
        <WritedTime>{time}</WritedTime>
      </UserInfoArea>
      <CommentText>{text}</CommentText>
    </CommentArea>
  )
}