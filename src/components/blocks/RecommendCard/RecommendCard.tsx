import { Card, Icon, Description, Title, Des, RightIcon } from "./RecommendCard.styles";
import right from "../../../assets/icons/right.svg";

interface RecommendCardType {
  status: "good" | "bad",
  onClick(): void,
}

export default function RecommendCard({ status, onClick }: RecommendCardType) {
  const handleClick = () => {
    onClick();
  }

  return (
    <Card onClick={handleClick}>
      <Icon status={status} />
      <Description>
        <Title>{status === "good" ? "강추!!" : "비추.."}</Title>
        <Des>
          {status === "good" 
            ? "완전 강추! 사용해보고 매우 만족했던 별 다섯개짜리 제품들이에요"
            : "별 한개도 아까운 제품들.. 완전 비추! 절대 사지마세요"
          }
        </Des>
      </Description>
      <RightIcon src={right}></RightIcon>
    </Card>
  )
}