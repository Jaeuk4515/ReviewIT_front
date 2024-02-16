import { CategoryArea, CategoryButton, Img, Name } from "./Category.styles";
import getCategory from "../../../services/getCategory";
import { useAppSelector } from "../../../store/hooks";
import { selectCategory } from "../../../store/slices/categorySlice";
import { selectTheme } from "../../../store/slices/themeSlice";

interface CategoryType {
  categoryName: string;
  nameLeftPadding: string;
  onClick: () => void;
}

export default function Category({ categoryName, nameLeftPadding, onClick }: CategoryType) {
  const { category } = useAppSelector(selectCategory);
  const { theme } = useAppSelector(selectTheme);

  return (
    <CategoryArea onClick={onClick}>
      <CategoryButton active={category === categoryName ? "on" : "off"} buttontheme={theme}>
        <Img category={getCategory(categoryName)} />
        <Name padding={nameLeftPadding} active={category === categoryName ? "on" : "off"} nametheme={theme}>{categoryName}</Name>
      </CategoryButton>
    </CategoryArea>
  )
}