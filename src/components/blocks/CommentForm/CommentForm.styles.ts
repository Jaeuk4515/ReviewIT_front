import styled from "styled-components";
import Button from "../../atoms/Button/Button";
import TextArea from "../../atoms/TextArea/TextArea";

const Form = styled.form`
  width: 46%;
  min-width: 787px;
  height: 120px;
  border: 1.5px solid rgba(182, 182, 182, .1);
  border-radius: 15px;
  background-color: ${({ theme }) => theme.commentFormColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`

const NoAuthCover = styled.div<{theme: "light" | "dark"}>`
  position: absolute;
  top: 0; bottom: 0;
  left: 0; right: 0;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme === "light" ? "rgb(54, 79, 107, .15)" : "rgba(0, 0, 0, .4)"};
`

const NoAuthText = styled.h2`
  color: ${({ theme }) => theme.noAuthTextColor};
`

const FormArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: .5rem;
`

const InputWrapper = styled.div`
  display: flex;
  gap: 1rem;
`

const CommentInput = styled(TextArea)`
`

const SubmitButton = styled(Button)`
  background-color: ${({ theme }) => theme.writeButtonColor};
  color: #FFF;
  width: 70px;
  height: 30px;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
`

export { Form, NoAuthCover, NoAuthText, FormArea, InputWrapper, CommentInput, SubmitButton }