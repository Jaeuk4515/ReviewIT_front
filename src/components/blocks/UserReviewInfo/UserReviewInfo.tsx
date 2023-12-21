import { DateInfo, InfoCard, ProductImage, ReviewInfo, TextInfo } from "./UserReviewInfo.styles";
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
          <span style={{fontSize: "20px", fontWeight: "bold"}}>{reviewTitle}</span>
          <span style={{fontSize: "18px"}}>{productName}</span>
        </TextInfo>
        <Stars mode="view" grade={grade} />
      </ReviewInfo>
      <DateInfo><span style={{fontSize: "15px", color: "#929292"}}>{createdAt}</span></DateInfo>
    </InfoCard>
  )
}