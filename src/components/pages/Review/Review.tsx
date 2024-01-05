import { useEffect, useState } from "react";
import Search from "../../atoms/Search/Search";
import CategoryNav from "../../blocks/CategoryNav/CategoryNav";
import RecommendCard from "../../blocks/RecommendCard/RecommendCard";
import { ContentArea } from "../Home/Home.styles";
import { ReviewPage, ReviewPostArea, GridPost, PaginationArea, ShiftButton, FirstIcon, PrevIcon, NextIcon, LastIcon, NumberArea, NumberMark } from "./Review.styled";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import getPageArray from "../../../services/getPageArray";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/RootState";
import { setPostInfo } from "../../../store/slices/postInfoSlice";
import { setPageInfo } from "../../../store/slices/pageSlice";
import PageControl from "../../../services/pageControl";
import { resetCategory, setCategory } from "../../../store/slices/categorySlice";
import { origin_URL } from "../../../App";

export type category = "컴퓨터" | "노트북" | "핸드폰" | "모니터" | "키보드" | "마우스" | "태블릿" | "스마트워치" | "스피커" | "none";

export default function Review() {
  const postInfo = useSelector((state: RootState) => state.postInfo);
  const dispatch = useDispatch();
  const [ searchParams, setSearchParams ] = useSearchParams();
  const category = searchParams.get("category");
  const page = Number(searchParams.get("page"));
  const perPage = Number(searchParams.get("perPage"));
  const reset = searchParams.get("reset");
  const pageInfo = useSelector((state: RootState) => state.page);
  const pageArray = getPageArray(page, pageInfo.totalPage);
  const navigate = useNavigate();
  const pageController = new PageControl(page, pageInfo, searchParams, setSearchParams);
  const [ isSearching, setIsSearching ] = useState(false);
  const searchText = useSelector((state: RootState) => state.searchText);
  const { theme } = useSelector((state: RootState) => state.theme);
  
  const goToReviews = (status: "good" | "bad") => () => {
    if (status === "good") navigate(`/posts/recommendation/good-product?page=1&perPage=${pageInfo.perPage}`);
    if (status === "bad") navigate(`/posts/recommendation/bad-product?page=1&perPage=${pageInfo.perPage}`);
  };

  const setCategoryQuery = (newCategory: category) => {
    searchParams.set("category", newCategory);
    setSearchParams(searchParams);
  };

  const setResetQuery = (newReset: string) => {
    searchParams.set("reset", newReset);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    const getReviewsInfo = async () => {
      let response;
      if (category === "none") {
        if (isSearching) {  // 검색인 경우 (카테고리 선택 X)
          response = await axios.get(`${origin_URL}/review/search/${searchText}?page=${page}&perPage=${perPage}`);
        } else {  // 전체 조회 (검색 X)
          response = await axios.get(`${origin_URL}/review?page=${page}&perPage=${perPage}`);
        };
      } else {
        if (isSearching) {  // 검색인 경우 (카테고리 선택 O)
          response = await axios.get(`${origin_URL}/review/search/${searchText}?category=${category}&page=${page}&perPage=${perPage}`);
        } else {  // 전체 조회 (검색 X)
          response = await axios.get(`${origin_URL}/review/category/${category}?page=${page}&perPage=${perPage}`);
        };
      };
      dispatch(setPageInfo({ page: page, perPage: perPage, totalPage: response.data.totalPage }));
      dispatch(setPostInfo(response.data.thumbnailInfo));
    };

    getReviewsInfo();
  }, [page, perPage]);

  useEffect(() => {
    const getReviewsInfo = async () => {
      if (reset === "yes") {
        let response;
        if (category === "none") {
          if (isSearching) {  // 검색인 경우 (카테고리 선택 X)
            if (!searchText) {  // 검색어를 지우기만하고 카테고리 변경 시 (카테고리 선택 X)
              response = await axios.get(`${origin_URL}/review?page=${1}&perPage=${pageInfo.perPage}`);
            } else {
              response = await axios.get(`${origin_URL}/review/search/${searchText}?page=${1}&perPage=${pageInfo.perPage}`);
            };
          } else {  // 전체 조회 (검색 X)
            response = await axios.get(`${origin_URL}/review?page=${1}&perPage=${pageInfo.perPage}`);
          };
          dispatch(resetCategory());
        } else {
          if (isSearching) {  // 검색인 경우 (카테고리 선택 O)
            if (!searchText) {  // 검색어를 지우기만하고 카테고리 변경 시 (카테고리 선택 O)
              response = await axios.get(`${origin_URL}/review/category/${category}?page=${1}&perPage=${pageInfo.perPage}`);
            } else {
              response = await axios.get(`${origin_URL}/review/search/${searchText}?category=${category}&page=${1}&perPage=${pageInfo.perPage}`);
            };
          } else {  // 전체 조회 (검색 X)
            response = await axios.get(`${origin_URL}/review/category/${category}?page=${1}&perPage=${pageInfo.perPage}`);
          };
          dispatch(setCategory(category as category));
        };
        dispatch(setPageInfo({ page: 1, perPage: pageInfo.perPage, totalPage: response.data.totalPage }));
        dispatch(setPostInfo(response.data.thumbnailInfo));
        pageController.handlePageChange(1);
      };
    };

    getReviewsInfo();
  }, [category]);

  return (
    <ReviewPage>
      <ContentArea style={{width: "60%", minWidth: "800px", marginBottom: "20px"}}>
        <RecommendCard status="good" onClick={goToReviews("good")} />
        <RecommendCard status="bad" onClick={goToReviews("bad")} />
      </ContentArea>
      <Search color="white" width="500px" height="50px" mode="whole" isSearching={isSearching} setIsSearching={setIsSearching} pageController={pageController} />
      <div style={{width: "60%", minWidth: "800px"}}><CategoryNav setCategoryQuery={setCategoryQuery} setResetQuery={setResetQuery} /></div>
      <ReviewPostArea>
        {postInfo.map(({ reviewId, productImage, productName, grade }) => {
          return <Link to={`/posts/detail/${reviewId}`} key={reviewId}><GridPost className="" url={productImage} name={productName} grade={grade} /></Link>
        })}
      </ReviewPostArea>
      <PaginationArea>
        <ShiftButton onClick={pageController.moveToFirstPage}><FirstIcon /></ShiftButton>
        <ShiftButton onClick={pageController.moveToPrevPage}><PrevIcon /></ShiftButton>
        <NumberArea>
          {pageArray.map(pageNumber => (
            <NumberMark
              key={pageNumber}
              theme={theme}
              focus={pageNumber === page ? "on" : "off"}
              onClick={() => pageController.handlePageChange(pageNumber)}
            >
              {pageNumber}
            </NumberMark>
          ))}
        </NumberArea>
        <ShiftButton onClick={pageController.moveToNextPage}><NextIcon /></ShiftButton>
        <ShiftButton onClick={pageController.moveToLastPage}><LastIcon /></ShiftButton>
      </PaginationArea>
    </ReviewPage>
  )
}