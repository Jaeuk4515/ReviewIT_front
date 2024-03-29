import CategoryNav from "../../blocks/CategoryNav/CategoryNav";
import Post from "../../blocks/Post/Post";
import { 
  HomePage,
  PagePart, 
  ContentArea,
  RecommendCardArea, 
  PageText, 
  PageTitle, 
  PageIcon, 
  PageTitleText, 
  PageDes, 
  MoreButton, 
  MoreText, 
  MoreIcon, 
  PostArea, 
  Carousel,
  LeftShiftButton, 
  RightShiftButton 
} from "./Home.styles";
import RecommendCard from "../../blocks/RecommendCard/RecommendCard";
import hot from "../../../assets/icons/hot.svg";
import review from "../../../assets/icons/review_icon.svg";
import thumbs_up from "../../../assets/icons/thumbs_up.svg"
import thumbs_down from "../../../assets/icons/thumbs_down.svg"
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { getPostsThunk, selectPosts } from "../../../store/slices/postInfoSlice";
import Banner from "../../blocks/Banner/Banner";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { selectPage } from "../../../store/slices/pageSlice";
import { selectTheme } from "../../../store/slices/themeSlice";
import Loading from "../Loading/Loading";

export default function Home() {
  const { status, posts } = useAppSelector(selectPosts);
  const pageInfo = useAppSelector(selectPage);
  const dispatch = useAppDispatch();
  const [ scrollPosition, setScrollPosition ] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const { theme } = useAppSelector(selectTheme);
  const [ maxScrollLeft, setMaxScrollLeft ] = useState(0);
  
  const goToReviews = (status: "good" | "bad") => () => {
    if (status === "good") navigate(`/posts/recommendation/good-product?page=1&perPage=${pageInfo.perPage}`);
    if (status === "bad") navigate(`/posts/recommendation/bad-product?page=1&perPage=${pageInfo.perPage}`);
  };

  useEffect(() => {
    dispatch(getPostsThunk());
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth"
      });
    }
  }, [scrollPosition]);

  useEffect(() => {
    if (carouselRef.current) {
      setMaxScrollLeft(carouselRef.current.clientWidth * 3);
    };
  }, [carouselRef.current]);

  const handlePrevClick = () => {
    if (scrollPosition <= 0) return;
    if (carouselRef.current) {
      const newScrollPosition = scrollPosition - carouselRef.current.clientWidth;
      setScrollPosition(newScrollPosition);
    };
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      if (scrollPosition >= maxScrollLeft) return;
      const newScrollPosition = scrollPosition + carouselRef.current.clientWidth;
      setScrollPosition(newScrollPosition);
    };
  };

  if (status === "pending") {
    return <Loading />
  };
  if (status === "rejected") {
    return <></>
  };

  return (
    <HomePage>
      <Banner />
      <PagePart>
        <ContentArea>
          <PageText>
            <PageTitle>
              <PageTitleText>리뷰</PageTitleText>
              <PageIcon logotheme={theme} url={review} />
            </PageTitle>
            <PageDes>제품들의 사용 후기를 찾아보세요</PageDes>
          </PageText>
          <Link to={`/posts?category=none&page=1&perPage=${pageInfo.perPage}&reset=yes`}>
            <MoreButton><MoreText>전체 리뷰</MoreText><MoreIcon /></MoreButton>
          </Link>
        </ContentArea>
        <CategoryNav from="home" />
      </PagePart>
      <PagePart>
        <ContentArea>
          <PageText>
            <PageTitle>
              <PageTitleText>베스트 리뷰</PageTitleText>
              <PageIcon logotheme={theme} url={hot} />
            </PageTitle>
            <PageDes>많은 사람들에게 도움이 된 인기 리뷰들이에요</PageDes>
          </PageText>
        </ContentArea>
        <PostArea>
          <LeftShiftButton className="" direction="left" state={scrollPosition === 0 ? "disable" : "enable"} onClick={handlePrevClick} />
          <Carousel ref={carouselRef}>
            {posts.map((post, index) => (
              <Link to={`/posts/detail/${post.reviewId}`} key={index} style={{ flex: "0 0 auto", width: "20%", minWidth: "150px" }}>
                <Post className="" url={post.productImage} name={post.productName} grade={post.grade} />
              </Link>
            ))}
          </Carousel>
          <RightShiftButton className="" direction="right" state={scrollPosition >= maxScrollLeft ? "disable" : "enable"} onClick={handleNextClick} />
        </PostArea>
      </PagePart>
      <PagePart style={{"marginTop": "20px"}}>
        <PageText>
          <PageTitle>
            <PageTitleText>추천</PageTitleText>
            <PageIcon logotheme={theme} url={thumbs_up} />
            <PageTitleText style={{"marginLeft": "7px"}}>비추천</PageTitleText>
            <PageIcon logotheme={theme} url={thumbs_down} />
          </PageTitle>
          <PageDes>제품들의 사용 후기를 찾아보세요</PageDes>
        </PageText>
        <RecommendCardArea>
          <RecommendCard status="good" onClick={goToReviews("good")} />
          <RecommendCard status="bad" onClick={goToReviews("bad")} />
        </RecommendCardArea>
      </PagePart>
    </HomePage>
  )
}