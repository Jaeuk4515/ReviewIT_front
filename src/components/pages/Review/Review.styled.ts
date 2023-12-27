import styled from "styled-components";
import { HomePage } from "../Home/Home.styles";
import Post from "../../blocks/Post/Post";
import { Img } from "../../atoms/Category/Category.styles";
import { ReactComponent as First } from "../../../assets/icons/first.svg";
import { ReactComponent as Prev } from "../../../assets/icons/prev.svg";
import { ReactComponent as Next } from "../../../assets/icons/next.svg";
import { ReactComponent as Last } from "../../../assets/icons/last.svg";

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

const ShiftButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.pageButtonColor};
  border-radius: 10px;
  height: 30px;
  cursor: pointer;
  aspect-ratio: 1;
`

const ShiftIcon = styled(Img)`
  width: 14px;
  height: 14px;
`

const FirstIcon = styled(First)`
  width: 14px;
  height: 14px;
  fill: ${({ theme }) => theme.pageButtonIconColor};
  stroke: ${({ theme }) => theme.pageButtonIconColor};
`
const PrevIcon = styled(Prev)`
  width: 14px;
  height: 14px;
  fill: ${({ theme }) => theme.pageButtonIconColor};
`
const NextIcon = styled(Next)`
  width: 14px;
  height: 14px;
  fill: ${({ theme }) => theme.pageButtonIconColor};
`
const LastIcon = styled(Last)`
  width: 14px;
  height: 14px;
  fill: ${({ theme }) => theme.pageButtonIconColor};
  stroke: ${({ theme }) => theme.pageButtonIconColor};
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

const NumberMark = styled.div<{focus: "on" | "off"; theme: "light" | "dark"}>`
  border-radius: 30px;
  width: 30px;
  height: 30px;
  background-color: ${props => props.focus === "on" ? props.theme === "light" ? "#256FFF" : "#fff" : ""};
  color: ${props => props.focus === "on" ? props.theme === "light" ? "white" : "black" : ""};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export { ReviewPage, ReviewPostArea, GridPost, PaginationArea, ShiftButton, ShiftIcon, FirstIcon, PrevIcon, NextIcon, LastIcon, NumberArea, NumberMark }