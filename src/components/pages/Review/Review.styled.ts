import styled from "styled-components";
import { HomePage, PostArea } from "../Home/Home.styles";
import Post from "../../blocks/Post/Post";
import { SubmitButton } from "../../blocks/CommentForm/CommentForm.styles";
import { Img } from "../../atoms/Category/Category.styles";

const ReviewPage = styled(HomePage)`
  margin-top: 15px;
  gap: 4rem;
`

const ReviewPostArea = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2%;
  width: 60%;
  min-width: 800px;
  margin-top: -30px;
`

const GridPost = styled(Post)`
  width: 100%;
  height: 100%;
  margin-bottom: 30px;
`

const PaginationArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  gap: .3rem;
`

// const ShiftButton = styled(SubmitButton)`
//   background-color: #E8F2FF;
//   color: #256FFF;
//   width: 13%;
//   height: 35px;
// `

const ShiftButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #E8F2FF;
  border-radius: 10px;
  height: 30px;
  cursor: pointer;
  aspect-ratio: 1;
`

const ShiftIcon = styled(Img)`
  width: 14px;
  height: 14px;
`

const NumberArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .6rem;
  width: 70%;
  height: 35px;
  margin: 0 10px;
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

export { ReviewPage, ReviewPostArea, GridPost, PaginationArea, ShiftButton, ShiftIcon, NumberArea, NumberMark }