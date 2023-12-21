import axios from "axios";
import UserProfile from "../../atoms/UserProfile/UserProfile";
import { Form, NoAuthCover, NoAuthText, InputWrapper, CommentInput, SubmitButton, FormArea } from "./CommentForm.styles";
import { useState } from "react";
import { CommentInfo } from "../../pages/ReviewDetail/ReviewDetail";

interface CommentFormType {
  isLogin: boolean;
  url: string;
  uId: string;
  rId: string;
  commentInfo: CommentInfo[];
  setCommentInfo: React.Dispatch<React.SetStateAction<CommentInfo[]>>;
};

export default function CommentForm({ isLogin, url, uId, rId, commentInfo, setCommentInfo }: CommentFormType) {
  const [ commentText, setCommentText ] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentText(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:3001/comment/create', { 
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
      {!isLogin && <NoAuthCover><NoAuthText>댓글을 작성하려면 로그인을 해주세요!</NoAuthText></NoAuthCover>}
      <FormArea>
        <InputWrapper>
          <UserProfile className="" url={url} onClick={()=>{}} />
          <CommentInput color="#FFF" width="700px" height="60px" fontSize="15px" name="" value={commentText} onChange={handleChange} />
        </InputWrapper>
        <SubmitButton>댓글 쓰기</SubmitButton>
      </FormArea>
    </Form>
  )
}