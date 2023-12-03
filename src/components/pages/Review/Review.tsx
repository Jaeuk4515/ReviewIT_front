import { useEffect, useState } from "react";
import Search from "../../atoms/Search/Search";
import CategoryNav from "../../blocks/CategoryNav/CategoryNav";
import RecommendCard from "../../blocks/RecommendCard/RecommendCard";
import { ContentArea } from "../Home/Home.styles";
import { ReviewPage, ReviewPostArea, GridPost, PaginationArea, ShiftButton, NumberArea, NumberMark } from "./Review.styled";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import getPageArray from "../../../services/getPageArray";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/RootState";
import { setPostInfo } from "../../../store/postInfoSlice";

export default function Review() {
  const postInfo = useSelector((state: RootState) => state.postInfo);
  const dispatch = useDispatch();
  const { pageNumber } = useParams();
  const [ pageInfo, setPageInfo ] = useState({
    page: Number(pageNumber),
    perPage: 5,
    totalPage: 0
  });
  const [ pageCycle, setPageCycle ] = useState(1);
  const [ buttonType, setButtonType ] = useState("");
  const pageArray = getPageArray(pageCycle, pageInfo.totalPage);
  const navigate = useNavigate();
  
  const goToReviews = (status: "good" | "bad") => () => {
    if (status === "good") navigate("/posts/good-review");
    if (status === "bad") navigate("/posts/bad-review");
  }

  console.log(postInfo, pageInfo, pageArray, pageCycle);

  useEffect(() => {
    const getReviewsInfo = async () => {
      setButtonType("");
      const response = await axios.get(`http://localhost:3001/review/?page=${pageInfo.page}&perPage=${pageInfo.perPage}`);
      setPageInfo({
        ...pageInfo,
        totalPage: response.data.totalPage
      });
      dispatch(setPostInfo(response.data.thumbnailInfo));
    };

    getReviewsInfo();
  }, [pageInfo.page, pageInfo.perPage]);

  useEffect(() => {
    if (buttonType === "prev") {
      handlePageChange(pageArray[4]);
      return;
    }
    if (buttonType === "next") {
      handlePageChange(pageArray[0]);
      return;
    }
  }, [pageCycle])

  const handlePageChange = (newPage: number) => {
    setPageInfo((prev) => ({...prev, page: newPage}));
  };

  const handlePrevButtonClick = () => {
    if (pageInfo.page === 1) return;
    if (pageInfo.page === pageArray[0]) {
      setPageCycle(prev => prev - 1);
      setButtonType("prev");
      return;
    }
    handlePageChange(pageInfo.page - 1);
  };

  const handleNextButtonClick = () => {
    if (pageInfo.page === pageInfo.totalPage) return;
    if (pageInfo.page === pageArray[4]) {
      setPageCycle(prev => prev + 1);
      setButtonType("next");
      return;
    } 
    handlePageChange(pageInfo.page + 1);
  };

  return (
    <ReviewPage>
      <ContentArea style={{width: "60%", minWidth: "800px", marginBottom: "20px"}}>
        <RecommendCard status="good" onClick={goToReviews("good")} />
        <RecommendCard status="bad" onClick={goToReviews("bad")} />
      </ContentArea>
      <Search color="white" width="500px" height="50px" />
      <div style={{width: "60%", minWidth: "800px"}}><CategoryNav /></div>
      <ReviewPostArea>
        {postInfo.map(({ reviewId, productImage, productName, grade }) => {
          return <Link to={`/posts/detail/${reviewId}?page=${pageInfo.page}`} key={reviewId}><GridPost className="" url={productImage} name={productName} grade={grade} /></Link>
        })}
      </ReviewPostArea>
      <PaginationArea>
      <ShiftButton onClick={handlePrevButtonClick}>이전</ShiftButton>
      <NumberArea>
        {pageArray.map(pageNumber => (
          <NumberMark
            key={pageNumber}
            focus={pageNumber === pageInfo.page ? "on" : "off"}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </NumberMark>
        ))}
      </NumberArea>
      <ShiftButton onClick={handleNextButtonClick}>다음</ShiftButton>
    </PaginationArea>
    </ReviewPage>
    )
}