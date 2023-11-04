import Category from "../../atoms/Category/Category";
import { NavBar } from "./CategoryNav.styles";

export default function CategoryNav() {
  return (
    <NavBar>
      <Category categoryName="컴퓨터" />
      <Category categoryName="노트북" />
      <Category categoryName="핸드폰" />
      <Category categoryName="가전제품" />
    </NavBar>
  )
}