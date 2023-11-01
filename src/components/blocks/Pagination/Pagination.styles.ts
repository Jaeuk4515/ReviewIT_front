import styled from "styled-components";
import { SubmitButton } from "../CommentForm/CommentForm.styles";

const PaginationArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20%;
  margin-top: 30px;
`

const ShiftButton = styled(SubmitButton)`
  background-color: #E8F2FF;
  color: #256FFF;
  width: 13%;
  height: 35px;
`

const NumberArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .6rem;
  width: 70%;
  height: 35px;
`

const NumberMark = styled.div<{focus: "on" | "off"}>`
  border-radius: 30px;
  width: 30px;
  height: 30px;
  background-color: ${props => props.focus === "on" ? "#256FFF" : ""};
  color: ${props => props.focus === "on" ? "white" : ""};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export { PaginationArea, ShiftButton, NumberArea, NumberMark }