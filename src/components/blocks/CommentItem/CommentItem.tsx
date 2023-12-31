import { useEffect, useState } from "react";
import { CommentArea, UserInfoArea, Profile, UserName, WritedTime, CommentText, DeleteButton } from "./CommentItem.styles";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/RootState";
import { CommentInfo } from "../../pages/ReviewDetail/ReviewDetail";
import { origin_URL } from "../../../App";

export interface CommentItemType {
  cId: string;
  userId: string;
  text: string;
  createdAt: string;
  commentInfo: CommentInfo[];
  setCommentInfo: React.Dispatch<React.SetStateAction<CommentInfo[]>>;
}

interface UserInfo {
  userImage: string;
  nickname: string;
}

export default function CommentItem({ cId, userId, text, createdAt, commentInfo, setCommentInfo }: CommentItemType) {
  const login = useSelector((state: RootState) => state.login);
  const user = useSelector((state: RootState) => state.user);
  const [ userInfo, setUserInfo ] = useState<UserInfo>({
    userImage: "",
    nickname: ""
  });
  
  useEffect(() => {
    const getUserInfo = async () => {
      const response = await axios.post(`${origin_URL}/user/getUserInfo`, { _id: userId });
      const { userImage, nickname } = response.data;
      setUserInfo({ userImage, nickname });
    };

    getUserInfo();
  }, []);

  const deleteComment = async () => {
    const response = await axios.delete(`${origin_URL}/comment/delete/${cId}`);
    if (response.data.message === "success") {
      let newCommentInfo = commentInfo.filter(comment => comment.commentId !== cId);
      setCommentInfo(newCommentInfo);
    };
  };

  return (
    <CommentArea>
      {(login && user._id === userId) && <DeleteButton onClick={deleteComment} />}
      <UserInfoArea>
        <Profile className="" url={userInfo.userImage} onClick={()=>{}} />
        <UserName>{userInfo.nickname}</UserName>
        <WritedTime>{createdAt}</WritedTime>
      </UserInfoArea>
      <CommentText>{text}</CommentText>
    </CommentArea>
  )
}