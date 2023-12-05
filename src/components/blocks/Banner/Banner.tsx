import { BannerArea, ContentWrapper, PosterImg, TextArea, MainText, SubText, ButtonNav, ShiftButton } from "./Banner.styles";
import img1 from "../../../assets/icons/banner_image_1.png";
import img2 from "../../../assets/icons/banner_image_2.png";
import img3_1 from "../../../assets/icons/banner_image_3_1.png";
import img3_2 from "../../../assets/icons/banner_image_3_2.png";

interface BannerType {
  banner_num: number;
  setCurrentImageIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function Banner({ banner_num, setCurrentImageIndex }: BannerType) {
  let imgColor = [ "#F1EAFF", "#FFF9F1", "#E0F4FF" ];
  let content;

  const handleClick = (num: number) => {
    setCurrentImageIndex(num);
  }

  switch (banner_num) {
    case 1:
      content = (
        <>
          <TextArea top="150px" left="50px">
            <MainText color="#2B2A4C">IT 제품 뭘 사야할지 고민이라면?</MainText>
            <SubText color="#576082">필수 IT 기기들의 리뷰를 한눈에 모아보고 결정해보세요!</SubText>
          </TextArea>
          <PosterImg category={img1} style={{width: "700px", height: "370px"}} top="22px" right="-10px" />
        </>
      )
      break;
    case 2:
      content = (
        <>
          <TextArea top="150px" right="40px">
            <MainText color="#505C04">사람들의 다양한 리뷰</MainText>
            <SubText color="#555843">제품에 대한 여러 사람들의 다양한 리뷰를 확인해보세요!</SubText>
          </TextArea>
          <PosterImg category={img2} style={{width: "720px", height: "370px"}} top="30px" left="-10px" />
        </>
      )
      break;
    case 3:
      content = (
        <>
          <PosterImg category={img3_2} style={{width: "150px", height: "230px"}} bottom="30px" left="0px" />
          <TextArea top="110px" left="180px">
            <MainText color="#353535">추천과 비추천, 베스트 리뷰</MainText>
            <SubText color="#555843">강추 제품과 비추 제품 리뷰, 많은 사람들이 좋아한 베스트 리뷰들로 현명한 소비를 해보세요!</SubText>
          </TextArea>
          <PosterImg category={img3_1} style={{width: "720px", height: "370px"}} bottom="0px" right="0px" />
        </>
      )
      break;
  };

  return (
    <BannerArea backgroundcolor={imgColor[banner_num - 1]}>
      <ContentWrapper>
        {content}
        <div style={{width: "40px", height: "100%"}}>
          <ButtonNav>
            <ShiftButton active={banner_num === 1 ? "on" : "off"} onClick={() => handleClick(1)} />
            <ShiftButton active={banner_num === 2 ? "on" : "off"} onClick={() => handleClick(2)} />
            <ShiftButton active={banner_num === 3 ? "on" : "off"} onClick={() => handleClick(3)} />
          </ButtonNav>
        </div>
      </ContentWrapper>
    </BannerArea>
  )
}