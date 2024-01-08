import axios from "axios";
import UserProfile from "../../atoms/UserProfile/UserProfile";
import { Form, NoAuthCover, NoAuthText, InputWrapper, CommentInput, SubmitButton, FormArea } from "./CommentForm.styles";
import { useState } from "react";
import { CommentInfo } from "../../pages/ReviewDetail/ReviewDetail";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/RootState";
import { origin_URL } from "../../../App";

interface CommentFormType {
  url: string;
  uId: string;
  rId: string;
  commentInfo: CommentInfo[];
  setCommentInfo: React.Dispatch<React.SetStateAction<CommentInfo[]>>;
};

export default function CommentForm({ url, uId, rId, commentInfo, setCommentInfo }: CommentFormType) {
  const login = useSelector((state: RootState) => state.login);
  const [ commentText, setCommentText ] = useState("");
  const { theme } = useSelector((state: RootState) => state.theme);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentText(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await axios.post(`${origin_URL}/comment/create`, { 
      userId: uId,
      reviewId: rId,
      text: commentText
    });
    const { _id, userId, text, createdAt } = response.data;
    setCommentInfo([
      ...commentInfo,
      {
        commentId: _id,
        userId: userId,
        text: text,
        createdAt: createdAt
      }
    ]);
    setCommentText("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      {!login && <NoAuthCover theme={theme}><NoAuthText>댓글을 작성하려면 로그인을 해주세요!</NoAuthText></NoAuthCover>}
      <FormArea>
        <InputWrapper>
          <div style={{minWidth: "45px"}}><UserProfile className="" url={url} onClick={()=>{}} /></div>
          <CommentInput commentform="yes">{commentText}</CommentInput>
        </InputWrapper>
        <SubmitButton>댓글 쓰기</SubmitButton>
      </FormArea>
    </Form>
  )
}