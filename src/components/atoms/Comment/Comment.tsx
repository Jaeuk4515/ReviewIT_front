import { CommentArea, CommentIcon, CommentNum } from "./Comment.styles"

export default function Comment({amount}: {amount: number}) {
  return (
    <CommentArea>
      <CommentIcon />
      <CommentNum>{amount}</CommentNum>
    </CommentArea>
  )
}