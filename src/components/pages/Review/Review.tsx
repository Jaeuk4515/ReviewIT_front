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
import { setPostInfo } from "../../../store/slices/postInfoSlice";
import { setPageInfo } from "../../../store/slices/pageSlice";
import PageControl from "../../../services/pageControl";
import next from "../../../assets/icons/next.svg";
import last from "../../../assets/icons/last.svg";
import prev from "../../../assets/icons/prev.svg";
import first from "../../../assets/icons/first.svg";
import { resetCategory, setCategory } from "../../../store/slices/categorySlice";

export type category = "컴퓨터" | "노트북" | "핸드폰" | "모니터" | "키보드" | "마우스" | "태블릿" | "none"

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
  
  const goToReviews = (status: "good" | "bad") => () => {
    if (status === "good") navigate("/posts/good-review");
    if (status === "bad") navigate("/posts/bad-review");
  };

  const setCategoryQuery = (newCategory: category) => {
    searchParams.set("category", newCategory);
    setSearchParams(searchParams);
  };

  const setResetQuery = (newReset: string) => {
    searchParams.set("reset", newReset);
    setSearchParams(searchParams);
  }

  useEffect(() => {
    const getReviewsInfo = async () => {
      let response;
      if (category === "none") {
        response = await axios.get(`http://localhost:3001/review?page=${page}&perPage=${perPage}`);
      } else {
        response = await axios.get(`http://localhost:3001/review/category/${category}?page=${page}&perPage=${perPage}`);
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
          response = await axios.get(`http://localhost:3001/review?page=${1}&perPage=${5}`);
          dispatch(resetCategory());
        } else {
          response = await axios.get(`http://localhost:3001/review/category/${category}?page=${1}&perPage=${5}`);
          dispatch(setCategory(category as category));
        };
        dispatch(setPageInfo({ page: 1, perPage: 5, totalPage: response.data.totalPage }));
        dispatch(setPostInfo(response.data.thumbnailInfo));
        pageController.handlePageChange(1);
      }
    };

    getReviewsInfo();
  }, [category]);

  console.log(reset);
  return (
    <ReviewPage>
      <ContentArea style={{width: "60%", minWidth: "800px", marginBottom: "20px"}}>
        <RecommendCard status="good" onClick={goToReviews("good")} />
        <RecommendCard status="bad" onClick={goToReviews("bad")} />
      </ContentArea>
      <Search color="white" width="500px" height="50px" />
      <div style={{width: "60%", minWidth: "800px"}}><CategoryNav setCategoryQuery={setCategoryQuery} setResetQuery={setResetQuery} /></div>
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

// import { useEffect, useState } from "react";
// import Search from "../../atoms/Search/Search";
// import CategoryNav from "../../blocks/CategoryNav/CategoryNav";
// import RecommendCard from "../../blocks/RecommendCard/RecommendCard";
// import { ContentArea } from "../Home/Home.styles";
// import { ReviewPage, ReviewPostArea, GridPost, PaginationArea, ShiftButton, ShiftIcon, NumberArea, NumberMark } from "./Review.styled";
// import { Link, useNavigate, useSearchParams } from "react-router-dom";
// import axios from "axios";
// import getPageArray from "../../../services/getPageArray";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../../store/RootState";
// import { setPostInfo } from "../../../store/slices/postInfoSlice";
// import { setPageInfo } from "../../../store/slices/pageSlice";
// import PageControl from "../../../services/pageControl";
// import next from "../../../assets/icons/next.svg";
// import last from "../../../assets/icons/last.svg";
// import prev from "../../../assets/icons/prev.svg";
// import first from "../../../assets/icons/first.svg";

// export default function Review() {
//   const postInfo = useSelector((state: RootState) => state.postInfo);
//   const dispatch = useDispatch();
//   const [ searchParams, setSearchParams ] = useSearchParams();
//   const category = searchParams.get("category");
//   const page = Number(searchParams.get("page"));
//   const perPage = Number(searchParams.get("perPage"));
//   const pageInfo = useSelector((state: RootState) => state.page);
//   const pageArray = getPageArray(page, pageInfo.totalPage);
//   const navigate = useNavigate();
//   const pageController = new PageControl(page, pageInfo, searchParams, setSearchParams);
//   const categoryObj = useSelector((state: RootState) => state.category);
  
//   const goToReviews = (status: "good" | "bad") => () => {
//     if (status === "good") navigate("/posts/good-review");
//     if (status === "bad") navigate("/posts/bad-review");
//   };

//   const categoryChange = (newCategory: "컴퓨터" | "노트북" | "핸드폰" | "모니터" | "키보드" | "마우스" | "태블릿" | "none") => {
//     searchParams.set("category", newCategory);
//     setSearchParams(searchParams);
//   };

//   useEffect(() => {
//     const getReviewsInfo = async () => {
//       let response;
//       if (categoryObj.category === "none") {
//         response = await axios.get(`http://localhost:3001/review?page=${page}&perPage=${perPage}`);
//       } else {
//         response = await axios.get(`http://localhost:3001/review/category/${categoryObj.category}?page=${page}&perPage=${perPage}`);
//       };
//       dispatch(setPageInfo({ page: page, perPage: perPage, totalPage: response.data.totalPage }));
//       dispatch(setPostInfo(response.data.thumbnailInfo));
//     };

//     getReviewsInfo();
//   }, [page, perPage]);

//   useEffect(() => {
//     const getReviewsInfo = async () => {
//       let response;
//       if (categoryObj.category === "none") {
//         response = await axios.get(`http://localhost:3001/review?page=${1}&perPage=${5}`);
//       } else {
//         response = await axios.get(`http://localhost:3001/review/category/${categoryObj.category}?page=${1}&perPage=${5}`);
//       };
//       dispatch(setPageInfo({ page: 1, perPage: 5, totalPage: response.data.totalPage }));
//       dispatch(setPostInfo(response.data.thumbnailInfo));
//       pageController.handlePageChange(1);
//     };

//     // categoryChange(categoryObj.category);
//     getReviewsInfo();
//   }, [categoryObj.category]);

//   console.log(categoryObj.category);

//   return (
//     <ReviewPage>
//       <ContentArea style={{width: "60%", minWidth: "800px", marginBottom: "20px"}}>
//         <RecommendCard status="good" onClick={goToReviews("good")} />
//         <RecommendCard status="bad" onClick={goToReviews("bad")} />
//       </ContentArea>
//       <Search color="white" width="500px" height="50px" />
//       <div style={{width: "60%", minWidth: "800px"}}><CategoryNav /></div>
//       <ReviewPostArea>
//         {postInfo.map(({ reviewId, productImage, productName, grade }) => {
//           return <Link to={`/posts/detail/${reviewId}`} key={reviewId}><GridPost className="" url={productImage} name={productName} grade={grade} /></Link>
//         })}
//       </ReviewPostArea>
//       <PaginationArea>
//         <ShiftButton onClick={pageController.moveToFirstPage}><ShiftIcon category={first} /></ShiftButton>
//         <ShiftButton onClick={pageController.moveToPrevPage}><ShiftIcon category={prev} /></ShiftButton>
//         <NumberArea>
//           {pageArray.map(pageNumber => (
//             <NumberMark
//               key={pageNumber}
//               focus={pageNumber === page ? "on" : "off"}
//               onClick={() => pageController.handlePageChange(pageNumber)}
//             >
//               {pageNumber}
//             </NumberMark>
//           ))}
//         </NumberArea>
//         <ShiftButton onClick={pageController.moveToNextPage}><ShiftIcon category={next} /></ShiftButton>
//         <ShiftButton onClick={pageController.moveToLastPage}><ShiftIcon category={last} /></ShiftButton>
//       </PaginationArea>
//     </ReviewPage>
//   )
// }