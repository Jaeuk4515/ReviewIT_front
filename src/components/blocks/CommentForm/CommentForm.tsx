import UserProfile from "../../atoms/UserProfile/UserProfile";
import { Form, InputWrapper, CommentInput, SubmitButton, FormArea } from "./CommentForm.styles";

export default function CommentForm({ url }: {url:string}) {
  return (
    <Form>
      <FormArea>
        <InputWrapper>
          <UserProfile className="" url={url} />
          <CommentInput color="#FFF" width="700px" height="60px" />
        </InputWrapper>
        <SubmitButton>댓글 쓰기</SubmitButton>
      </FormArea>
    </Form>
  )
}