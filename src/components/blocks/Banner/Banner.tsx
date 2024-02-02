import { BannerArea, ContentWrapper, PosterImg, TextArea, MainText, SubText, ButtonNav, ShiftButton } from "./Banner.styles";
import img1 from "../../../assets/icons/banner_image_1.png";
import img2 from "../../../assets/icons/banner_image_2.png";
import img3_1 from "../../../assets/icons/banner_image_3_1.png";
import img3_2 from "../../../assets/icons/banner_image_3_2.png";
import { useEffect, useState } from "react";

export default function Banner() {
  const [ currentImageIndex, setCurrentImageIndex ] = useState(1);
  let imgColor = [ "#F1EAFF", "#FFF9F1", "#E0F4FF" ];
  let content;

  const handleClick = (num: number) => {
    setCurrentImageIndex(num);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => prevIndex === 3 ? 1 : prevIndex + 1);
    }, 6000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  switch (currentImageIndex) {
    case 1:
      content = (
        <>
          <TextArea num={1} top="150px" left="120px">
            <MainText num={1} color="#2B2A4C">IT 제품 뭘 사야할지 고민이라면?</MainText>
            <SubText num={1} color="#576082">필수 IT 기기들의 리뷰를 한눈에 모아보고 결정해보세요!</SubText>
          </TextArea>
          <PosterImg category={img1} num={1} width="550px" height="370px" top="22px" right="80px" />
        </>
      )
      break;
    case 2:
      content = (
        <>
          <TextArea num={2} top="150px" right="110px">
            <MainText num={2} color="#505C04">사람들의 다양한 리뷰</MainText>
            <SubText num={2} color="#555843">제품에 대한 여러 사람들의 다양한 리뷰를 확인해보세요!</SubText>
          </TextArea>
          <PosterImg category={img2} num={2} width="570px" height="370px" top="30px" left="80px" />
        </>
      )
      break;
    case 3:
      content = (
        <>
          <PosterImg category={img3_2} num={3_2} width="120px" height="230px" bottom="40px" left="100px" />
          <TextArea num={3} top="80px" left="180px">
            <MainText num={3} color="#353535">추천과 비추천, 베스트 리뷰</MainText>
            <SubText num={3} color="#555843">강추 제품과 비추 제품 리뷰, 많은 사람들이 좋아한 베스트 리뷰들로 현명한 소비를 해보세요!</SubText>
          </TextArea>
          <PosterImg category={img3_1} num={3_1} width="600px" height="330px" bottom="0px" right="80px" />
        </>
      )
      break;
  };

  return (
    <BannerArea backgroundcolor={imgColor[currentImageIndex - 1]}>
      <ContentWrapper>
        {content}
        <div style={{ width: "40px", height: "100%" }}>
          <ButtonNav>
            <ShiftButton active={currentImageIndex === 1 ? "on" : "off"} onClick={() => handleClick(1)} />
            <ShiftButton active={currentImageIndex === 2 ? "on" : "off"} onClick={() => handleClick(2)} />
            <ShiftButton active={currentImageIndex === 3 ? "on" : "off"} onClick={() => handleClick(3)} />
          </ButtonNav>
        </div>
      </ContentWrapper>
    </BannerArea>
  )
}