import styled from "styled-components";
import { ReactComponent as Heart } from "../../../assets/icons/heart.svg";

const LikeyArea = styled.div`
  display: flex;
  gap: .4rem;
  align-items: center;

  @media ${({ theme }) => theme.mediaQuery.small} {
    gap: .3rem;
  };
  @media screen and (max-width: 500px) {
    gap: .3rem;
  };
  @media screen and (max-width: 400px) {
    gap: .2rem;
  };
`

const LikeyIcon = styled(Heart)`
  width: 18px;
  height: 16px;
  fill: ${({ theme }) => theme.commentIconColor};

  @media ${({ theme }) => theme.mediaQuery.small} {
    width: 14px;
    height: 13x;
  };
  @media screen and (max-width: 500px) {
    width: 13px;
    height: 12px;
  };
  @media screen and (max-width: 400px) {
    width: 12px;
    height: 11px;
  };
`

const LikeyNum = styled.span`
  @media ${({ theme }) => theme.mediaQuery.small} {
    font-size: 14px;
  };
  @media screen and (max-width: 500px) {
    font-size: 13px;
  };
  @media screen and (max-width: 400px) {
    font-size: 12px;
  };
`

export { LikeyArea, LikeyIcon, LikeyNum }