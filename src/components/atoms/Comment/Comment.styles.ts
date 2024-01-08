import styled from "styled-components";
import { ReactComponent as Comment } from "../../../assets/icons/comment.svg";

const CommentArea = styled.div`
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

const CommentIcon = styled(Comment)`
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => theme.commentIconColor};

  @media ${({ theme }) => theme.mediaQuery.small} {
    width: 20px;
    height: 20px;
  };
  @media screen and (max-width: 500px) {
    width: 18px;
    height: 18px;
  };
  @media screen and (max-width: 400px) {
    width: 16px;
    height: 16px;
  };
`

const CommentNum = styled.span`
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

export { CommentArea, CommentIcon, CommentNum }