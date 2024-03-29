import axios from "axios";
import { Form, NoAuthCover, NoAuthText, InputWrapper, ImageWrapper, UserImage, CommentInput, SubmitButton, FormArea } from "./CommentForm.styles";
import { useState } from "react";
import { CommentInfo } from "../../pages/ReviewDetail/ReviewDetail";
import { origin_URL } from "../../../App";
import { useAppSelector } from "../../../store/hooks";
import { selectLogin } from "../../../store/slices/loginSlice";
import { selectTheme } from "../../../store/slices/themeSlice";

interface CommentFormType {
  url: string;
  uId: string;
  rId: string;
  commentInfo: CommentInfo[];
  setCommentInfo: React.Dispatch<React.SetStateAction<CommentInfo[]>>;
};

export default function CommentForm({ url, uId, rId, commentInfo, setCommentInfo }: CommentFormType) {
  const login = useAppSelector(selectLogin);
  const [ commentText, setCommentText ] = useState("");
  const { theme } = useAppSelector(selectTheme);

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
          <ImageWrapper><UserImage className="" url={url} onClick={()=>{}} /></ImageWrapper>
          <CommentInput commentform="yes" value={commentText} onChange={handleChange} />
        </InputWrapper>
        <SubmitButton>댓글 쓰기</SubmitButton>
      </FormArea>
    </Form>
  )
}