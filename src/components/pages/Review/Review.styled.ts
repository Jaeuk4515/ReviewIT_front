import styled from "styled-components";
import { HomePage } from "../Home/Home.styles";

const ReviewPage = styled(HomePage)`
  margin-top: 15px;
`

const ReviewPostArea = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 3rem;
  width: 60%;
  margin-top: 20px;
`

export { ReviewPage, ReviewPostArea }