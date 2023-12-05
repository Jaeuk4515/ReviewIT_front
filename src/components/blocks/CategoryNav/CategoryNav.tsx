import Category from "../../atoms/Category/Category";
import { CategoryNavBar, NavBar } from "./CategoryNav.styles";

export default function CategoryNav() {
  return (
    <CategoryNavBar>
      <NavBar>
        <Category categoryName="컴퓨터" nameLeftPadding="0px" />
        <Category categoryName="노트북" nameLeftPadding="2px" />
        <Category categoryName="핸드폰" nameLeftPadding="0px" />
        <Category categoryName="모니터" nameLeftPadding="3px" />
        <Category categoryName="키보드" nameLeftPadding="2px" />
        <Category categoryName="마우스" nameLeftPadding="1px" />
        <Category categoryName="태블릿" nameLeftPadding="2px" />
      </NavBar>
    </CategoryNavBar>
  )
}