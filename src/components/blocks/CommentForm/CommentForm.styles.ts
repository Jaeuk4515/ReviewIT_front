import styled from "styled-components";
import Button from "../../atoms/Button/Button";
import TextArea from "../../atoms/TextArea/TextArea";

const Form = styled.div`
  width: 800px;
  height: 120px;
  border: 1.5px solid rgba(182, 182, 182, .1);
  border-radius: 15px;
  background-color: #F2F8FF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  background-color: #256FFF;
  color: #FFF;
  width: 70px;
  height: 30px;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
`

export { Form, FormArea, InputWrapper, CommentInput, SubmitButton }