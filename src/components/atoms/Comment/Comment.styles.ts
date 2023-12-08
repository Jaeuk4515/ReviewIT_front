import styled from "styled-components";
import comment from "../../../assets/icons/comment.svg"

const CommentArea = styled.div`
  display: flex;
  gap: .4rem;
  align-items: center;
`

const CommentIcon = styled.div`
  background-image: url(${comment});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 22px;
  height: 22px;
`

const CommentNum = styled.span`

`

export { CommentArea, CommentIcon, CommentNum }