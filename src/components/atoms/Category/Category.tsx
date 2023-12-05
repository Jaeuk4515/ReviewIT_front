import { CategoryArea, CategoryButton, Img, Name } from "./Category.styles";
import getCategory from "../../../services/getCategory";

interface CategoryType {
  categoryName: string;
  nameLeftPadding: string;
}

export default function Category({ categoryName, nameLeftPadding }: CategoryType) {
  return (
    <CategoryArea>
      <CategoryButton>
        <Img category={getCategory(categoryName)} />
        <Name padding={nameLeftPadding}>{categoryName}</Name>
      </CategoryButton>
    </CategoryArea>
  )
}