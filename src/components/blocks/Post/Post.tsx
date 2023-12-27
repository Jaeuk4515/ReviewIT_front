import Stars from "../Stars/Stars"
import { PostArea, ProductImg, ProductName } from "./Post.styles"

interface PostType {
  className: string;
  url: string;
  name: string;
  grade: 1 | 2 | 3 | 4 | 5;
}

export default function Post({ className, url, name, grade }: PostType) {
  return (
    <PostArea className={className}>
      <ProductImg className="" url={url} />
      <ProductName>{name}</ProductName>
      <Stars mode="view" grade={grade} />
    </PostArea>
  )
}