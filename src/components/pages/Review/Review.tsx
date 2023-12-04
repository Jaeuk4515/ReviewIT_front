import { useEffect, useState } from "react";
import Search from "../../atoms/Search/Search";
import CategoryNav from "../../blocks/CategoryNav/CategoryNav";
import RecommendCard from "../../blocks/RecommendCard/RecommendCard";
import { ContentArea } from "../Home/Home.styles";
import { ReviewPage, ReviewPostArea, GridPost, PaginationArea, ShiftButton, ShiftIcon, NumberArea, NumberMark } from "./Review.styled";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import getPageArray from "../../../services/getPageArray";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/RootState";
import { setPostInfo } from "../../../store/postInfoSlice";
import { setPageInfo } from "../../../store/pageSlice";
import PageControl from "../../../services/pageControl";
import next from "../../../assets/icons/next.svg";
import last from "../../../assets/icons/last.svg";
import prev from "../../../assets/icons/prev.svg";
import first from "../../../assets/icons/first.svg";

export default function Review() {
  const postInfo = useSelector((state: RootState) => state.postInfo);
  const dispatch = useDispatch();
  const [ searchParams, setSearchParams ] = useSearchParams();
  const page = Number(searchParams.get("page"));
  const perPage = Number(searchParams.get("perPage"));
  const pageInfo = useSelector((state: RootState) => state.page);
  const pageArray = getPageArray(page, pageInfo.totalPage);
  const navigate = useNavigate();
  const pageController = new PageControl(page, pageInfo, searchParams, setSearchParams);
  
  const goToReviews = (status: "good" | "bad") => () => {
    if (status === "good") navigate("/posts/good-review");
    if (status === "bad") navigate("/posts/bad-review");
  };

  useEffect(() => {
    const getReviewsInfo = async () => {
      const response = await axios.get(`http://localhost:3001/review/?page=${page}&perPage=${perPage}`);
      dispatch(setPageInfo({ page: page, perPage: perPage, totalPage: response.data.totalPage }));
      dispatch(setPostInfo(response.data.thumbnailInfo));
    };

    getReviewsInfo();
  }, [page, perPage]);

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
          return <Link to={`/posts/detail/${reviewId}`} key={reviewId}><GridPost className="" url={productImage} name={productName} grade={grade} /></Link>
        })}
      </ReviewPostArea>
      <PaginationArea>
        <ShiftButton onClick={pageController.moveToFirstPage}><ShiftIcon category={first} /></ShiftButton>
        <ShiftButton onClick={pageController.moveToPrevPage}><ShiftIcon category={prev} /></ShiftButton>
        <NumberArea>
          {pageArray.map(pageNumber => (
            <NumberMark
              key={pageNumber}
              focus={pageNumber === page ? "on" : "off"}
              onClick={() => pageController.handlePageChange(pageNumber)}
            >
              {pageNumber}
            </NumberMark>
          ))}
        </NumberArea>
        <ShiftButton onClick={pageController.moveToNextPage}><ShiftIcon category={next} /></ShiftButton>
        <ShiftButton onClick={pageController.moveToLastPage}><ShiftIcon category={last} /></ShiftButton>
      </PaginationArea>
    </ReviewPage>
  )
}