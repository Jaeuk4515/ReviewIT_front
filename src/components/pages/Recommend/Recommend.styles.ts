import styled from "styled-components";
import { HomePage } from "../Home/Home.styles";

const RecommendPage = styled(HomePage)``

const TitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  min-width: 800px;
  margin-top: 60px;
  margin-bottom: -20px;

  @media screen and (max-width: 850px) {
    width: 80%;
    min-width: 550px;
  };
  @media screen and (max-width: 700px) {
    min-width: 470px;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    margin-top: 40px;
    min-width: 300px;
  };
`

export { RecommendPage, TitleArea }