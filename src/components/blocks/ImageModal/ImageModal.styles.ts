import styled from "styled-components";
import { Img } from "../../atoms/Category/Category.styles";
import { PrevButton } from "../ReviewCard/ReviewCard.styles";

const FullImage = styled(Img)`
  width: 600px;
  height: 600px;
  transition: .1s;
`

const ModalPrevButton = styled(PrevButton)`
  top: 260px; left: -70px;
  width: 80px;
  height: 80px;
`

const ModalNextButton = styled(ModalPrevButton)`
  left: initial; right: -70px;
`

export { FullImage, ModalPrevButton, ModalNextButton }