import { MoreButton, MoreIcon, MoreText, PageIcon, PageTitle, PageTitleText } from "../Home/Home.styles";
import { RecommendPage, TitleArea } from "./Recommend.styles";
import good from "../../../assets/icons/good.svg";
import bad from "../../../assets/icons/bad.svg";
import Search from "../../atoms/Search/Search";
import { GridPost, ReviewPostArea } from "../Review/Review.styled";
import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/RootState";
import getPageArray from "../../../services/getPageArray";
import PageControl from "../../../services/pageControl";
import { setPageInfo } from "../../../store/slices/pageSlice";
import { setPostInfo } from "../../../store/slices/postInfoSlice";
import { PaginationArea, ShiftButton, ShiftIcon, NumberArea, NumberMark } from "../Review/Review.styled";
import next from "../../../assets/icons/next.svg";
import last from "../../../assets/icons/last.svg";
import prev from "../../../assets/icons/prev.svg";
import first from "../../../assets/icons/first.svg";

export default function Recommend({ pageType }: {pageType: "good-product" | "bad-product"}) {
  const [ searchParams, setSearchParams ] = useSearchParams();
  const page = Number(searchParams.get("page"));
  const perPage = Number(searchParams.get("perPage"));
  const postInfo = useSelector((state: RootState) => state.postInfo);
  const pageInfo = useSelector((state: RootState) => state.page);
  const pageArray = getPageArray(page, pageInfo.totalPage);
  const pageController = new PageControl(page, pageInfo, searchParams, setSearchParams);
  const dispatch = useDispatch();

  useEffect(() => {
    const getReviewInfo = async () => {
      const response = await axios.get(`http://localhost:3001/review/recommendation/${pageType}?page=${page}&perPage=${perPage}`);
      dispatch(setPageInfo({ page: page, perPage: perPage, totalPage: response.data.totalPage }));
      dispatch(setPostInfo(response.data.thumbnailInfo));
    };

    getReviewInfo();
  }, [page, perPage]);

  return (
    <RecommendPage>
      <TitleArea>
        <PageTitle style={{alignItems: "center", gap: "1rem"}}>
          <PageIcon url={pageType === "good-product" ? good : bad} style={{width: "36px", height: "36px"}} />
          <PageTitleText style={{fontSize: "30px", height: "36px", lineHeight: "36px"}}>{pageType === "good-product" ? "강추" : "비추"}</PageTitleText>
        </PageTitle>
        <MoreButton>
          <Link to="/posts?category=none&page=1&perPage=5&reset=yes"><MoreText>전체 리뷰</MoreText></Link>
          <MoreIcon />
        </MoreButton>
      </TitleArea>
      <Search color="white" width="500px" height="50px" />
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
    </RecommendPage>
  )
}