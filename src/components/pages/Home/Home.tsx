import CategoryNav from "../../blocks/CategoryNav/CategoryNav";
import Post from "../../blocks/Post/Post";
import { HomePage, Carousel, PagePart, ContentArea, PageText, PageTitle, PageIcon, PageTitleText, PageDes, MoreButton, MoreText, MoreIcon, PostArea, ShiftButton } from "./Home.styles";
import image from "../../../assets/icons/image.webp";
import RecommendCard from "../../blocks/RecommendCard/RecommendCard";
import review from "../../../assets/icons/review_icon.svg";
import thumbs_up from "../../../assets/icons/thumbs_up.svg"
import thumbs_down from "../../../assets/icons/thumbs_down.svg"

export default function Home() {
  return (
    <HomePage>
      <Carousel />
      <CategoryNav />
      <PagePart>
        <ContentArea>
          <PageText>
            <PageTitle>
              <PageTitleText>리뷰</PageTitleText>
              <PageIcon url={review} />
            </PageTitle>
            <PageDes>제품들의 사용 후기를 찾아보세요!</PageDes>
          </PageText>
          <MoreButton>
            <MoreText>더보기</MoreText>
            <MoreIcon />
          </MoreButton>
        </ContentArea>
        <PostArea>
          <Post url={image} name="test" grade={3} />
          <Post url={image} name="test" grade={3} />
          <Post url={image} name="test" grade={3} />
          <Post url={image} name="test" grade={3} />
          <Post url={image} name="test" grade={3} />
          <ShiftButton className="" direction="left" state="disable" />
          <ShiftButton className="" direction="right" state="enable" />
        </PostArea>
      </PagePart>
      <PagePart style={{"marginTop": "20px"}}>
        <PageText>
          <PageTitle>
            <PageTitleText>추천</PageTitleText>
            <PageIcon url={thumbs_up} />
            <PageTitleText style={{"marginLeft": "10px"}}>비추천</PageTitleText>
            <PageIcon url={thumbs_down} />
          </PageTitle>
          <PageDes>제품들의 사용 후기를 찾아보세요!</PageDes>
        </PageText>
        <ContentArea>
          <RecommendCard status="good" />
          <RecommendCard status="bad" />
        </ContentArea>
      </PagePart>
    </HomePage>
  )
}