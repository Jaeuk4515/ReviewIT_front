import { useState } from "react";
import Stars from "../Stars/Stars";
import { Card, ReviewImg, PrevButton, NextButton, VerticalDivider, ReviewInfo, InfoArea, LinkArea, ProductName, ProductLink } from "./ReviewCard.styles";
import ImageModal from "../ImageModal/ImageModal";
import { MoreIcon } from "../../pages/Home/Home.styles";

interface ReviewCardType {
  urls: string[];
  name: string;
  link: string;
  grade: number;
}

export default function ReviewCard({ urls, name, link, grade }: ReviewCardType) {
  const [ urlsIndex, setUrlsIndex ] = useState(0);
  const [ imgModal, setImgModal ] = useState(false);

  const handlePrevClick = () => {
    if (urlsIndex <= 0) return;
    setUrlsIndex(prevIndex => prevIndex - 1);
  };

  const handleNextClick = () => {
    if (urlsIndex >= urls.length - 1) return;
    setUrlsIndex(prevIndex => prevIndex + 1);
  };

  return (
    <Card>
      <div style={{position: "relative"}}>
        <PrevButton className="" direction="left" state={urlsIndex <= 0 ? "disable" : "enable"} onClick={handlePrevClick} />
        <ReviewImg className="" url={urls[urlsIndex]} onClick={() => { setImgModal(true) }} />
        <NextButton className="" direction="right" state={urlsIndex >= urls.length - 1 ? "disable" : "enable"} onClick={handleNextClick} />
      </div>
      <VerticalDivider />
      <ReviewInfo>
        <InfoArea>
          <ProductName>{name}</ProductName>
        </InfoArea>
        <LinkArea href={link} target="_blank">
          <ProductLink>제품 보러가기</ProductLink>
          <MoreIcon />
        </LinkArea>
        <InfoArea>
          <Stars mode="view" grade={grade} />
        </InfoArea>
      </ReviewInfo>
      { imgModal && <ImageModal urls={urls} setImgModal={setImgModal} /> }
    </Card>
  )
}