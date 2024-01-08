import styled from "styled-components";
import alert from "../../../../assets/icons/alert.svg";
import { ModalTitle } from "../AuthModal/AuthModal.styles";
import { ModalBox, SuccessMark } from "../SuccessModal/SuccessModal.styles";

const NewModalBox = styled(ModalBox)`
  min-width: 270px;
  height: 360px;

  @media ${({ theme }) => theme.mediaQuery.small} {
    height: 300px;
  };
  @media screen and (max-width: 450px) {
    width: 310px;
    height: 250px;
  };
  @media screen and (max-width: 400px) {
    width: 270px;
    height: 200px;
  };
`

const ModalText = styled(ModalTitle)`
  display: flex;
  gap: 1rem;
`

const AlertIcon = styled(SuccessMark)`
  background-image: url(${alert});
  width: 26px;
  height: 26px;

  @media ${({ theme }) => theme.mediaQuery.small} {
    width: 22px;
    height: 22px;
  };
  @media screen and (max-width: 450px) {
    width: 18px;
    height: 18px;
  };
  @media screen and (max-width: 400px) {
    width: 14px;
    height: 14px;
  };
`

export { NewModalBox, ModalText, AlertIcon };