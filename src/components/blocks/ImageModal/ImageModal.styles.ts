import styled from "styled-components";
import { Img } from "../../atoms/Category/Category.styles";
import { PrevButton } from "../ReviewCard/ReviewCard.styles";

const ImageWrapper = styled.div`
  position: relative;
  width: 70%;
  max-width: 700px;
  min-width: 250px;
  height: auto;
  aspect-ratio: 1;
`

const FullImage = styled(Img)`
  // width: 600px;
  // height: 600px;
  // transition: .1s;

  // @media ${({ theme }) => theme.mediaQuery.small} {
  //   width: 500px;
  //   height: 500px;
  // };
  // @media screen and (max-width: 500px) {
  //   width: 450px;
  //   height: 450px;
  // };
  // @media screen and (max-width: 400px) {
  //   width: 400px;
  //   height: 400px;
  // };
  width: 100%;
  height: 100%;
  transition: .1s;
`

const ModalPrevButton = styled(PrevButton)`
  // top: 260px; left: -70px;
  // width: 80px;
  // height: 80px;
  width: 15%;
  height: auto;
  aspect-ratio: 1;
  top: 40%; left: -10%;
  display: initial;
`

const ModalNextButton = styled(ModalPrevButton)`
  // left: initial; right: -70px;
  left: initial; right: -10%;
`

export { ImageWrapper, FullImage, ModalPrevButton, ModalNextButton }