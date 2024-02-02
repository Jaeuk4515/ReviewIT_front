import { useSelector } from "react-redux";
import Category from "../../atoms/Category/Category";
import { CategoryNavBar, NavBar, LeftShiftButton, RightShiftButton } from "./CategoryNav.styles";
import { RootState } from "../../../store/RootState";
import { useNavigate } from "react-router-dom";
import { category } from "../../pages/Review/Review";
import { useEffect, useRef, useState } from "react";

interface CategoryNavType {
  from?: string;
  setCategoryQuery?: (newCategory: category) => void;
  setResetQuery?: (newReset: string) => void;
}

export default function CategoryNav({ from, setCategoryQuery, setResetQuery }: CategoryNavType) {
  const categoryObj = useSelector((state: RootState) => state.category);
  const pageInfo = useSelector((state: RootState) => state.page);
  const navigate = useNavigate();
  const [ scrollPosition, setScrollPosition ] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [ maxScrollLeft, setMaxScrollLeft ] = useState(0);  // 스크롤 가능한 최대 너비를 가져와서 설정

  const categroyChange = async (categoryName: category) => {
    if (from === "home") {  // 홈 화면의 카테고리 버튼을 클릭하는 경우 
      navigate(`/posts?category=${categoryName}&page=${pageInfo.page}&perPage=${pageInfo.perPage}&reset=yes`);
      return;
    };
    // 선택한 카테고리가 현재 선택중인 카테고리면 초기화, 그렇지 않으면 해당 카테고리로 적용
    categoryObj.category === categoryName ? setCategoryQuery!("none") : setCategoryQuery!(categoryName);
    setResetQuery!("yes");
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth"
      });
    };
  }, [scrollPosition]);

  useEffect(() => {
    if (carouselRef.current) setMaxScrollLeft(carouselRef.current.scrollWidth - carouselRef.current.clientWidth);
  }, [window.innerWidth]);

  const handlePrevClick = () => {
    if (carouselRef.current) setScrollPosition(0);
  };

  const handleNextClick = () => {
    if (carouselRef.current) setScrollPosition(maxScrollLeft);
  };

  return (
    <CategoryNavBar>
      <LeftShiftButton className="" direction="left" state={scrollPosition > 0 ? "enable" : "disable"} onClick={handlePrevClick} />
      <NavBar ref={carouselRef}>
        <Category categoryName="컴퓨터" nameLeftPadding="0px" onClick={() => categroyChange("컴퓨터")} />
        <Category categoryName="노트북" nameLeftPadding="2px" onClick={() => categroyChange("노트북")} />
        <Category categoryName="핸드폰" nameLeftPadding="0px" onClick={() => categroyChange("핸드폰")} />
        <Category categoryName="모니터" nameLeftPadding="3px" onClick={() => categroyChange("모니터")} />
        <Category categoryName="키보드" nameLeftPadding="2px" onClick={() => categroyChange("키보드")} />
        <Category categoryName="마우스" nameLeftPadding="1px" onClick={() => categroyChange("마우스")} />
        <Category categoryName="태블릿" nameLeftPadding="2px" onClick={() => categroyChange("태블릿")} />
        <Category categoryName="스마트워치" nameLeftPadding="0px" onClick={() => categroyChange("스마트워치")} />
        <Category categoryName="스피커" nameLeftPadding="0px" onClick={() => categroyChange("스피커")} />
      </NavBar>
      <RightShiftButton className="" direction="right" state={scrollPosition < maxScrollLeft ? "enable" : "disable"} onClick={handleNextClick} />
    </CategoryNavBar>
  )
}