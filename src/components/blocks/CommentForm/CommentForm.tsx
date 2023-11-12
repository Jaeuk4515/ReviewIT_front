import UserProfile from "../../atoms/UserProfile/UserProfile";
import { Form, NoAuthCover, NoAuthText, InputWrapper, CommentInput, SubmitButton, FormArea } from "./CommentForm.styles";

interface CommentFormType {
  url: string;
  isLogin: boolean;
}

export default function CommentForm({ url, isLogin }: CommentFormType) {
  return (
    <Form action="" method="">
      {!isLogin && <NoAuthCover><NoAuthText>댓글을 작성하려면 로그인을 해주세요!</NoAuthText></NoAuthCover>}
      <FormArea>
        <InputWrapper>
          <UserProfile className="" url={url} />
          <CommentInput color="#FFF" width="700px" height="60px" fontSize="15px" name="" value="" onChange={() => {}} />
        </InputWrapper>
        <SubmitButton>댓글 쓰기</SubmitButton>
      </FormArea>
    </Form>
  )
}