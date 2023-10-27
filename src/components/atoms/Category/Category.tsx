import { CategoryArea, ImgWrapper, Img, Name } from "./Category.styles";
import computer from "../../../assets/icons/computer.svg";
import laptop from "../../../assets/icons/laptop.svg";
import phone from "../../../assets/icons/phone.svg";
import appliance from "../../../assets/icons/appliance.svg";

export default function Category({ categoryName }: {categoryName: string}) {
  let url = "";
  if (categoryName === "컴퓨터") url = computer;
  if (categoryName === "노트북") url = laptop;
  if (categoryName === "핸드폰") url = phone;
  if (categoryName === "가전제품") url = appliance;
  return (
    <CategoryArea>
      <ImgWrapper><Img category={url} /></ImgWrapper>
      <Name>{categoryName}</Name>
    </CategoryArea>
  )
}