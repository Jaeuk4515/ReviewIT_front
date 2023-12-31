import CategoryNav from "../../blocks/CategoryNav/CategoryNav";
import Post from "../../blocks/Post/Post";
import { 
  HomePage,
  PagePart, 
  ContentArea, 
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
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/RootState";
import { setPostInfo } from "../../../store/slices/postInfoSlice";
import Banner from "../../blocks/Banner/Banner";
import { origin_URL } from "../../../App";

export default function Home() {
  const postInfo = useSelector((state: RootState) => state.postInfo);
  const pageInfo = useSelector((state: RootState) => state.page);
  const dispatch = useDispatch();
  const [ currentImageIndex, setCurrentImageIndex ] = useState(1);
  const [ scrollPosition, setScrollPosition ] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  
  const goToReviews = (status: "good" | "bad") => () => {
    if (status === "good") navigate(`/posts/recommendation/good-product?page=1&perPage=${pageInfo.perPage}`);
    if (status === "bad") navigate(`/posts/recommendation/bad-product?page=1&perPage=${pageInfo.perPage}`);
  };

  useEffect(() => {
    const getReviewsInfo = async () => {
      const response = await axios.get(`${origin_URL}/review/topReviews`);
      dispatch(setPostInfo(response.data));
    };

    getReviewsInfo();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => prevIndex === 3 ? 1 : prevIndex + 1);
    }, 6000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth"
      });
    }
  }, [scrollPosition]);

  const handlePrevClick = () => {
    if (scrollPosition <= 0) return;
    if (carouselRef.current) {
      const newScrollPosition = scrollPosition - carouselRef.current.clientWidth;
      setScrollPosition(newScrollPosition);
    };
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      if (scrollPosition >= carouselRef.current.clientWidth * 3) return;
      const newScrollPosition = scrollPosition + carouselRef.current.clientWidth;
      setScrollPosition(newScrollPosition);
    };
  };

  return (
    <HomePage>
      <Banner banner_num={currentImageIndex} setCurrentImageIndex={setCurrentImageIndex} />
      <PagePart>
        <ContentArea>
          <PageText>
            <PageTitle>
              <PageTitleText>리뷰</PageTitleText>
              <PageIcon url={review} />
            </PageTitle>
            <PageDes>제품들의 사용 후기를 찾아보세요</PageDes>
          </PageText>
          <MoreButton>
            <Link to={`/posts?category=none&page=1&perPage=${pageInfo.perPage}&reset=yes`}><MoreText>전체 리뷰</MoreText></Link>
            <MoreIcon />
          </MoreButton>
        </ContentArea>
        <CategoryNav from="home" />
      </PagePart>
      <PagePart>
        <ContentArea>
          <PageText>
            <PageTitle>
              <PageTitleText>베스트 리뷰</PageTitleText>
              <PageIcon url={hot} />
            </PageTitle>
            <PageDes>많은 사람들에게 도움이 된 인기 리뷰들이에요</PageDes>
          </PageText>
        </ContentArea>
        <PostArea>
          <LeftShiftButton className="" direction="left" state={scrollPosition === 0 ? "disable" : "enable"} onClick={handlePrevClick} />
          <Carousel ref={carouselRef}>
            {postInfo.map((post, index) => (
              <Link to={`/posts/detail/${post.reviewId}`} key={index} style={{ flex: "0 0 auto", width: "20%" }}>
                <Post className="" url={post.productImage} name={post.productName} grade={post.grade} />
              </Link>
            ))}
          </Carousel>
          <RightShiftButton 
            className="" 
            direction="right" 
            state={carouselRef.current ? scrollPosition >= carouselRef.current.scrollWidth - carouselRef.current.clientWidth ? "disable" : "enable" : "disable"}
            onClick={handleNextClick} 
          />
        </PostArea>
      </PagePart>
      <PagePart style={{"marginTop": "20px"}}>
        <PageText>
          <PageTitle>
            <PageTitleText>추천</PageTitleText>
            <PageIcon url={thumbs_up} />
            <PageTitleText style={{"marginLeft": "7px"}}>비추천</PageTitleText>
            <PageIcon url={thumbs_down} />
          </PageTitle>
          <PageDes>제품들의 사용 후기를 찾아보세요</PageDes>
        </PageText>
        <ContentArea>
          <RecommendCard status="good" onClick={goToReviews("good")} />
          <RecommendCard status="bad" onClick={goToReviews("bad")} />
        </ContentArea>
      </PagePart>
    </HomePage>
  )
}