import { CategoryArea, CategoryButton, Img, Name } from "./Category.styles";
import getCategory from "../../../services/getCategory";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/RootState";

interface CategoryType {
  categoryName: string;
  nameLeftPadding: string;
  onClick: () => void;
  width?: string;
}

export default function Category({ categoryName, nameLeftPadding, onClick, width }: CategoryType) {
  const { category } = useSelector((state: RootState) => state.category);
  const { theme } = useSelector((state: RootState) => state.theme);

  return (
    <CategoryArea onClick={onClick}>
      <CategoryButton active={category === categoryName ? "on" : "off"} theme={theme} width={width}>
        <Img category={getCategory(categoryName)} />
        <Name padding={nameLeftPadding} active={category === categoryName ? "on" : "off"} theme={theme}>{categoryName}</Name>
      </CategoryButton>
    </CategoryArea>
  )
}