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
`

const LikeyNum = styled.span`

`

export { LikeyArea, LikeyIcon, LikeyNum }