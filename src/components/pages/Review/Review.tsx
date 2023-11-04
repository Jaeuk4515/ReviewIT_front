import { useState } from "react";
import Search from "../../atoms/Search/Search";
import CategoryNav from "../../blocks/CategoryNav/CategoryNav";
import RecommendCard from "../../blocks/RecommendCard/RecommendCard";
import { ContentArea } from "../Home/Home.styles";
import { ReviewPage, ReviewPostArea, GridPost } from "./Review.styled";
import image from "../../../assets/icons/image.webp";
import Pagination from "../../blocks/Pagination/Pagination";

export type PostObject = {
  productUrl: string;
  productName: string;
  grade: 1 | 2 | 3 | 4 | 5;
  content: string;
}

export const posts: PostObject[] = [];
for (let i = 0; i < 15; i++) {
  posts.push({
    productUrl: image,
    productName: `test${i}`,
    grade: Math.ceil(Math.random()*5) as 1 | 2 | 3 | 4 | 5,
    content: ""
  })
}

export default function Review() {
  // const [ post, setPost ] = useState<PostObject[]>([]);


  return (
    <ReviewPage>
      <ContentArea style={{"width": "60%", "minWidth": "800px"}}>
        <RecommendCard status="good" />
        <RecommendCard status="bad" />
      </ContentArea>
      <CategoryNav />
      <Search color="white" width="500px" height="50px" />
      <ReviewPostArea>
        {posts.map(({ productUrl, productName, grade }, idx) => {
          return <GridPost className="" key={idx} url={productUrl} name={productName} grade={grade} />
        })}
      </ReviewPostArea>
      <Pagination />
    </ReviewPage>
    )
}