import ImageCard from "../../atoms/ImageCard/ImageCard"
import Stars from "../Stars/Stars"
import { PostArea, ProductName } from "./Post.styles"

interface PostType {
  url: string,
  name: string,
  grade: number
}

export default function Post({ url, name, grade }: PostType) {
  return (
    <PostArea>
      <ImageCard className="" url={url} />
      <ProductName>{name}</ProductName>
      <Stars grade={grade} />
    </PostArea>
  )
}