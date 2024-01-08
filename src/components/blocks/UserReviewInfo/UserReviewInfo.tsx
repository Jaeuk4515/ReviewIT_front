import { InfoCard, ProductImage, ReviewInfo, TextInfo, TitleSpan, NameSpan, DateInfo } from "./UserReviewInfo.styles";
import monitor from "../../../assets/icons/monitor.svg";
import Stars from "../Stars/Stars";
import { ProductImg } from "../Post/Post.styles";

interface UserReviewInfoType {
  productImage: string;
  reviewTitle: string;
  productName: string;
  grade: number;
  createdAt: string;
  onClick: () => void;
}

export default function UserReviewInfo({ productImage, reviewTitle, productName, grade, createdAt, onClick }: UserReviewInfoType) {
  return (
    <InfoCard onClick={onClick}>
      <ProductImage className="" url={productImage} />
      <ReviewInfo>
        <TextInfo>
          <TitleSpan>{reviewTitle}</TitleSpan>
          <NameSpan>{productName}</NameSpan>
        </TextInfo>
        <Stars mode="view" grade={grade} />
      </ReviewInfo>
      <DateInfo>{createdAt}</DateInfo>
    </InfoCard>
  )
}