import { PageIcon, PageTitle, PageTitleText } from "../Home/Home.styles";
import { RecommendPage, TitleArea } from "./Recommend.styles";
import good from "../../../assets/icons/good.svg";
import bad from "../../../assets/icons/bad.svg";
import Search from "../../atoms/Search/Search";
import { GridPost, ReviewPostArea } from "../Review/Review.styled";
// import { posts } from "../Review/Review";

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
        {/* {posts.map(({ productUrl, productName, grade }, idx) => {
          return <GridPost className="" key={idx} url={productUrl} name={productName} grade={grade} />
        })} */}
      </ReviewPostArea>
      {/* <Pagination /> */}
    </RecommendPage>
  )
}