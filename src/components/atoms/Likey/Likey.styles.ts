import styled from "styled-components";
import { ReactComponent as Heart } from "../../../assets/icons/heart.svg";

const LikeyArea = styled.div`
  display: flex;
  gap: .4rem;
  align-items: center;
`

const LikeyIcon = styled(Heart)`
  width: 18px;
  height: 16px;
  fill: ${({ theme }) => theme.commentIconColor};

  @media ${({ theme }) => theme.mediaQuery.small} {
    width: 14px;
    height: 13x;
  };
`

const LikeyNum = styled.span`
  @media ${({ theme }) => theme.mediaQuery.small} {
    font-size: 14px;
  };
`

export { LikeyArea, LikeyIcon, LikeyNum }