import { CategoryArea, CategoryButton, Img, Name } from "./Category.styles";
import getCategory from "../../../services/getCategory";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/RootState";

interface CategoryType {
  categoryName: string;
  nameLeftPadding: string;
  onClick: () => void;
}

export default function Category({ categoryName, nameLeftPadding, onClick }: CategoryType) {
  const { category } = useSelector((state: RootState) => state.category);
  const { theme } = useSelector((state: RootState) => state.theme);

  return (
    <CategoryArea onClick={onClick}>
      <CategoryButton active={category === categoryName ? "on" : "off"} buttontheme={theme}>
        <Img category={getCategory(categoryName)} />
        <Name padding={nameLeftPadding} active={category === categoryName ? "on" : "off"} nametheme={theme}>{categoryName}</Name>
      </CategoryButton>
    </CategoryArea>
  )
}