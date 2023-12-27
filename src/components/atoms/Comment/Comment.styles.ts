import styled from "styled-components";
import { ReactComponent as Comment } from "../../../assets/icons/comment.svg";

const CommentArea = styled.div`
  display: flex;
  gap: .4rem;
  align-items: center;
`

const CommentIcon = styled(Comment)`
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => theme.commentIconColor};
`

const CommentNum = styled.span`

`

export { CommentArea, CommentIcon, CommentNum }