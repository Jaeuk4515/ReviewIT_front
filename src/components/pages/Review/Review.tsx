import { useState } from "react";
import Search from "../../atoms/Search/Search";
import CategoryNav from "../../blocks/CategoryNav/CategoryNav";
import RecommendCard from "../../blocks/RecommendCard/RecommendCard";
import { ContentArea } from "../Home/Home.styles";
import { ReviewPage, ReviewPostArea } from "./Review.styled";
import image from "../../../assets/icons/image.webp";
import Post from "../../blocks/Post/Post";
import Pagination from "../../blocks/Pagination/Pagination";

export type PostObject = {
  url: string;
  name: string;
  grade: 1 | 2 | 3 | 4 | 5;
  content: string;
}

export const posts: PostObject[] = [];
for (let i = 0; i < 15; i++) {
  posts.push({
    url: image,
    name: `test${i}`,
    grade: Math.ceil(Math.random()*5) as 1 | 2 | 3 | 4 | 5,
    content: ""
  })
}

export default function Review() {
  // const [ post, setPost ] = useState<PostObject[]>([]);


  return (
    <ReviewPage>
      <ContentArea style={{"width": "60%"}}>
        <RecommendCard status="good" />
        <RecommendCard status="bad" />
      </ContentArea>
      <CategoryNav />
      <Search color="white" width="500px" height="50px" />
      <ReviewPostArea>
        {posts.map(({ url, name, grade }, idx) => {
          return <Post key={idx} url={url} name={name} grade={grade} />
        })}
      </ReviewPostArea>
      <Pagination />
    </ReviewPage>
    )
}