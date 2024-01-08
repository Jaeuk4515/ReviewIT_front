import { useState } from "react";
import Stars from "../Stars/Stars";
import { Card, ImgWrapper, ReviewImg, PrevButton, NextButton, VerticalDivider, InfoWrapper, ReviewInfo, InfoArea, LinkArea, ProductName, ProductLink } from "./ReviewCard.styles";
import ImageModal from "../ImageModal/ImageModal";
import { MoreIcon } from "../../pages/Home/Home.styles";
import Image3dSlide from "../Image3dSlide/Image3dSlide";

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
      <ImgWrapper>
        <PrevButton className="" direction="left" state={urlsIndex <= 0 ? "disable" : "enable"} onClick={handlePrevClick} />
        <ReviewImg className="" url={urls[urlsIndex]} onClick={() => { setImgModal(true) }} />
        <NextButton className="" direction="right" state={urlsIndex >= urls.length - 1 ? "disable" : "enable"} onClick={handleNextClick} />
        {/* <Image3dSlide productImages={urls} /> */}
      </ImgWrapper>
      <VerticalDivider />
      <InfoWrapper>
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
      </InfoWrapper>
    </Card>
  )
}