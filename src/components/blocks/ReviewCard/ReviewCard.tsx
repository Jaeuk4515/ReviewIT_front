import Stars from "../Stars/Stars";
import { Card, ReviewImg, VerticalDivider, ReviewInfo, InfoArea, LinkArea, ProductName, ProductLink } from "./ReviewCard.styles";

interface ReviewCardType {
  url: string,
  name: string,
  link: string,
  grade: number
}

export default function ReviewCard({ url, name, link, grade }: ReviewCardType) {
  return (
    <Card>
      <ReviewImg className="" url={url} />
      <VerticalDivider />
      <ReviewInfo>
        <InfoArea>
          <ProductName>{name}</ProductName>
        </InfoArea>
        <LinkArea>
          <ProductLink href={link} target="_blank">{link}</ProductLink>
        </LinkArea>
        <InfoArea>
          <Stars grade={grade} />
        </InfoArea>
      </ReviewInfo>
    </Card>
  )
}