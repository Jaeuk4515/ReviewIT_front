import { useSelector } from "react-redux";
import Category from "../../atoms/Category/Category";
import { CategoryNavBar, NavBar } from "./CategoryNav.styles";
import { RootState } from "../../../store/RootState";
import { useNavigate } from "react-router-dom";
import { category } from "../../pages/Review/Review";

interface CategoryNavType {
  from?: string;
  setCategoryQuery?: (newCategory: category) => void;
  setResetQuery?: (newReset: string) => void;
}

export default function CategoryNav({ from, setCategoryQuery, setResetQuery }: CategoryNavType) {
  const categoryObj = useSelector((state: RootState) => state.category);
  const pageInfo = useSelector((state: RootState) => state.page);
  const navigate = useNavigate();

  const categroyChange = async (categoryName: category) => {
    if (from === "home") {
      navigate(`/posts?category=${categoryName}&page=${pageInfo.page}&perPage=${pageInfo.perPage}&reset=yes`);
      return;
    };
    categoryObj.category === categoryName ? setCategoryQuery!("none") : setCategoryQuery!(categoryName);
    setResetQuery!("yes");
  };

  return (
    <CategoryNavBar>
      <NavBar>
        <Category categoryName="컴퓨터" nameLeftPadding="0px" onClick={() => categroyChange("컴퓨터")} />
        <Category categoryName="노트북" nameLeftPadding="2px" onClick={() => categroyChange("노트북")} />
        <Category categoryName="핸드폰" nameLeftPadding="0px" onClick={() => categroyChange("핸드폰")} />
        <Category categoryName="모니터" nameLeftPadding="3px" onClick={() => categroyChange("모니터")} />
        <Category categoryName="키보드" nameLeftPadding="2px" onClick={() => categroyChange("키보드")} />
        <Category categoryName="마우스" nameLeftPadding="1px" onClick={() => categroyChange("마우스")} />
        <Category categoryName="태블릿" nameLeftPadding="2px" onClick={() => categroyChange("태블릿")} />
      </NavBar>
    </CategoryNavBar>
  )
}

// import { useDispatch, useSelector } from "react-redux";
// import Category from "../../atoms/Category/Category";
// import { CategoryNavBar, NavBar } from "./CategoryNav.styles";
// import { RootState } from "../../../store/RootState";
// import axios from "axios";
// import { setPageInfo } from "../../../store/slices/pageSlice";
// import { setPostInfo } from "../../../store/slices/postInfoSlice";
// import { resetCategory, setCategory } from "../../../store/slices/categorySlice";
// import { useNavigate } from "react-router-dom";

// interface CategoryNavType {
//   from?: string;
// }

// export default function CategoryNav({ from }: CategoryNavType) {
//   const postInfo = useSelector((state: RootState) => state.postInfo);
//   const pageInfo = useSelector((state: RootState) => state.page);
//   const categoryObj = useSelector((state: RootState) => state.category);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const categroyChange = async (categoryName: "컴퓨터" | "노트북" | "핸드폰" | "모니터" | "키보드" | "마우스" | "태블릿" | "none") => {
//     if (from === "home") {
//       navigate("/posts");
//       return;
//     };
//     categoryObj.category === categoryName ? dispatch(resetCategory()) : dispatch(setCategory(categoryName));
//   };

//   return (
//     <CategoryNavBar>
//       <NavBar>
//         <Category categoryName="컴퓨터" nameLeftPadding="0px" onClick={() => categroyChange("컴퓨터")} />
//         <Category categoryName="노트북" nameLeftPadding="2px" onClick={() => categroyChange("노트북")} />
//         <Category categoryName="핸드폰" nameLeftPadding="0px" onClick={() => categroyChange("핸드폰")} />
//         <Category categoryName="모니터" nameLeftPadding="3px" onClick={() => categroyChange("모니터")} />
//         <Category categoryName="키보드" nameLeftPadding="2px" onClick={() => categroyChange("키보드")} />
//         <Category categoryName="마우스" nameLeftPadding="1px" onClick={() => categroyChange("마우스")} />
//         <Category categoryName="태블릿" nameLeftPadding="2px" onClick={() => categroyChange("태블릿")} />
//       </NavBar>
//     </CategoryNavBar>
//   )
// }