import styled from "styled-components";
import { Img } from "../../atoms/Category/Category.styles";
import { ModalTitle } from "../AuthModal/AuthModal.styles";

const ModalText = styled(ModalTitle)`
  display: flex;
  gap: 1rem;
`

const AlertIcon = styled(Img)`
  width: 30px;
  height: 30px;
`

export { ModalText, AlertIcon };