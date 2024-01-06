import { useEffect } from "react";
import { SearchArea, SearchBox, CancelButton, XIcon, IconArea } from "./Search.styles";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/RootState";
import { resetSearchText, setSearchText } from "../../../store/slices/searchTextSlice";
import { setPageInfo } from "../../../store/slices/pageSlice";
import { setPostInfo } from "../../../store/slices/postInfoSlice";
import PageControl from "../../../services/pageControl";
import { origin_URL } from "../../../App";

interface SearchType {
  color: string;
  width: string;
  height: string;
  mode: "whole" | "good-product" | "bad-product";
  isSearching?: boolean;
  setIsSearching?: React.Dispatch<React.SetStateAction<boolean>>;
  pageController: PageControl;
};

export default function Search({color, width, height, mode, isSearching, setIsSearching, pageController}: SearchType) {
  const searchText = useSelector((state: RootState) => state.searchText);
  const pageInfo = useSelector((state: RootState) => state.page);
  const { category } = useSelector((state: RootState) => state.category);
  const dispatch = useDispatch();
  const { theme } = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    dispatch(resetSearchText());
  }, [mode]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchText(e.target.value));
    if (!searchText) setIsSearching!(false);
  };

  const cancelSearch = async () => {
    // 검색창의 x 버튼을 누르거나 검색어를 다 지우고 검색하면 검색모드를 취소하고 전체 리뷰 조회로 다시 변환 
    let response;
    if (mode === "whole") {
      if (category === "none") {
        response = await axios.get(`${origin_URL}/review?page=${1}&perPage=${pageInfo.perPage}`);
      } else {
        response = await axios.get(`${origin_URL}/review/category/${category}?page=${1}&perPage=${pageInfo.perPage}`);
      };
    } else {
      response = await axios.get(`${origin_URL}/review/recommendation/${mode}?page=${1}&perPage=${pageInfo.perPage}`);
    }
    setIsSearching!(false);
    dispatch(setPageInfo({ page: 1, perPage: pageInfo.perPage, totalPage: response.data.totalPage }));
    dispatch(setPostInfo(response.data.thumbnailInfo));
    dispatch(resetSearchText());
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let response;
    const isWhiteSpaceOnly = /^\s*$/.test(searchText);
    if (!searchText || isWhiteSpaceOnly) {  // 검색어가 없거나 공백으로만 되어있는 경우
      if (!isSearching) return;  // 검색 모드가 아닌 전체 리뷰 모드라면 검색해도 반응 X 
      cancelSearch();  // 검색 모드라면 빈 문자열 or 공백으로 검색 시 전체 리뷰 모드로 다시 전환 
      return;
    };
    // 검색어가 있는 경우
    if (mode === "whole") {  // 전체 리뷰 페이지에서의 검색인 경우
      if (category === "none") {
        response = await axios.get(`${origin_URL}/review/search/${searchText}?page=${1}&perPage=${pageInfo.perPage}`);
      } else {
        response = await axios.get(`${origin_URL}/review/search/${searchText}?category=${category}&page=${1}&perPage=${pageInfo.perPage}`);
      };
    } else {  // 강추 or 비추 페이지에서의 검색인 경우 
      response = await axios.get(`${origin_URL}/review/search/${searchText}?category=${mode}&page=${1}&perPage=${pageInfo.perPage}`);
    };
    setIsSearching!(true);  // 검색 모드로 진입 
    dispatch(setPageInfo({ page: 1, perPage: pageInfo.perPage, totalPage: response.data.totalPage }));
    dispatch(setPostInfo(response.data.thumbnailInfo));
  };

  useEffect(() => {
    // 검색 후, 검색 초기화 후 페이지 정보(pageInfo.page)에 따른 페이지네이션 상의 표시를 맞추기 위함 
    pageController.handlePageChange(pageInfo.page);
  }, [pageInfo.page]);

  return (
    <SearchArea width={width} height={height} onSubmit={handleSubmit}>
      <SearchBox theme={theme} color={color} width={width} height={height} placeholder="Search" value={searchText} onChange={handleChange} />
      <IconArea>{searchText && <CancelButton onClick={cancelSearch}><XIcon /></CancelButton>}</IconArea>
    </SearchArea>
  )
}