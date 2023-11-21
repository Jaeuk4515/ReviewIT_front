import CategoryNav from "../../blocks/CategoryNav/CategoryNav";
import Post from "../../blocks/Post/Post";
import { 
  HomePage, 
  Banner, 
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
  ImgWrapper, 
  PostWrapper, 
  LeftShiftButton, 
  RightShiftButton 
} from "./Home.styles";
import RecommendCard from "../../blocks/RecommendCard/RecommendCard";
import review from "../../../assets/icons/review_icon.svg";
import thumbs_up from "../../../assets/icons/thumbs_up.svg"
import thumbs_down from "../../../assets/icons/thumbs_down.svg"
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { PostObject } from "../Review/Review";

export default function Home() {
  const [ postInfo, setPostInfo ] = useState<PostObject[][]>([]);
  const [ leftOffSet, setLeftOffSet ] = useState(0);
  const [ windowWidth, setWindowWidth ] = useState(0.594792 * window.innerWidth);
  const navigate = useNavigate();
  
  const goToReviews = (status: "good" | "bad") => () => {
    if (status === "good") navigate("/posts/good-review");
    if (status === "bad") navigate("/posts/bad-review");
  }

  useEffect(() => {
    const getReviewsInfo = async () => {
      const response = await axios.get("http://localhost:3001/review/?page=1&perPage=20");
      let postsWrapper: PostObject[][] = [];
      let posts: PostObject[] = [];
      response.data.thumbnailInfo.map((info: PostObject) => {
        posts.push(info);
        if (posts.length === 5) {
          postsWrapper.push(posts);
          posts = [];
        };
      });
      setPostInfo(postsWrapper);
    };

    getReviewsInfo();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(0.594792 * window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const componentWidth = Math.max(800, windowWidth);
  console.log(componentWidth);

  const handlePrevClick = () => {
    if (leftOffSet >= 0) return;
    setLeftOffSet((prevOffset) => prevOffset + componentWidth);
  }

  const handleNextClick = () => {
    if (leftOffSet <= -(postInfo.length - 1) * componentWidth) return;
    setLeftOffSet((prevOffset) => prevOffset - componentWidth);
  }

  return (
    <HomePage>
      <Banner />
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
            <Link to="/posts"><MoreText>더보기</MoreText></Link>
            <MoreIcon />
          </MoreButton>
        </ContentArea>
        <PostArea>
          <LeftShiftButton className="" direction="left" state={leftOffSet >= 0 ? "disable" : "enable"} onClick={handlePrevClick} />
          <Carousel>
            <ImgWrapper multi={postInfo.length} leftOffSet={leftOffSet}>
              {postInfo.map((postWrapper, outerIdx) => (
                <PostWrapper key={outerIdx}>
                  {postWrapper.map((post, innerIdx) => (
                    <Link to={`/posts/detail/${post.reviewId}`} key={innerIdx} style={{width: '20%'}}><Post className="" url={post.productImage} name={post.productName} grade={post.grade} /></Link>
                  ))}
                </PostWrapper>
              ))}
            </ImgWrapper>
          </Carousel>
          <RightShiftButton className="" direction="right" state={leftOffSet <= -(postInfo.length - 1) * componentWidth ? "disable" : "enable"} onClick={handleNextClick} />
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
          <RecommendCard status="good" onClick={goToReviews("good")} />
          <RecommendCard status="bad" onClick={goToReviews("bad")} />
        </ContentArea>
      </PagePart>
    </HomePage>
  )
}