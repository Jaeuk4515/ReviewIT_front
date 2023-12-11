import { DateInfo, InfoCard, ProductImage, ReviewInfo, TextInfo } from "./UserReviewInfo.styles";
import monitor from "../../../assets/icons/monitor.svg";
import Stars from "../Stars/Stars";

export default function UserReviewInfo() {
  return (
    <InfoCard>
      <ProductImage category={monitor} />
      <ReviewInfo>
        <TextInfo>
          <span style={{fontSize: "21px", fontWeight: "bold"}}>리뷰 제목</span>
          <span style={{fontSize: "19px"}}>제품명</span>
        </TextInfo>
        <Stars mode="view" grade={3} />
      </ReviewInfo>
      <DateInfo><span style={{fontSize: "15px", color: "#929292"}}>2023. 12. 9.</span></DateInfo>
    </InfoCard>
  )
}