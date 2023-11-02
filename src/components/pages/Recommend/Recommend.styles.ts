import styled from "styled-components";
import { Logo } from "../../blocks/AuthModal/AuthModal.styles";
import good from "../../../assets/icons/good.svg";
import bad from "../../../assets/icons/bad.svg";
import { HomePage } from "../Home/Home.styles";

const RecommendPage = styled(HomePage)`

`

const TitleArea = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 62%;
`

export { RecommendPage, TitleArea }