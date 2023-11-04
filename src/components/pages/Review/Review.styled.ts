import styled from "styled-components";
import { HomePage, PostArea } from "../Home/Home.styles";
import Post from "../../blocks/Post/Post";

const ReviewPage = styled(HomePage)`
  margin-top: 15px;
`

const ReviewPostArea = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2%;
  width: 60%;
  min-width: 800px;
  margin-top: 20px;
`

const GridPost = styled(Post)`
  width: 100%;
  height: 100%;
  margin-bottom: 30px;
`

export { ReviewPage, ReviewPostArea, GridPost }