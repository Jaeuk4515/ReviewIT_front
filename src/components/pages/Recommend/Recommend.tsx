import { PageIcon, PageTitle, PageTitleText } from "../Home/Home.styles";
import { RecommendPage, TitleArea } from "./Recommend.styles";
import good from "../../../assets/icons/good.svg";
import bad from "../../../assets/icons/bad.svg";
import Search from "../../atoms/Search/Search";
import { ReviewPostArea } from "../Review/Review.styled";
import Pagination from "../../blocks/Pagination/Pagination";
import { PostObject, posts } from "../Review/Review";
import Post from "../../blocks/Post/Post";

export default function Recommend({ pageType }: {pageType: "recommend" | "non-recommend"}) {
  return (
    <RecommendPage>
      <TitleArea>
        <PageTitle>
          <PageIcon url={pageType === "recommend" ? good : bad} />
          <PageTitleText>{pageType === "recommend" ? "강추" : "비추"}</PageTitleText>
        </PageTitle>
      </TitleArea>
      <Search color="white" width="500px" height="50px" />
      <ReviewPostArea>
        {posts.map(({ url, name, grade }, idx) => {
          return <Post key={idx} url={url} name={name} grade={grade} />
        })}
      </ReviewPostArea>
      <Pagination />
    </RecommendPage>
  )
}