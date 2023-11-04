import Input from "../../atoms/Input/Input";
import Stars from "../../blocks/Stars/Stars";
import { 
  ReviewCreatePage, 
  ReviewInfoArea, 
  SubArea, 
  InputArea, 
  SelectBox, 
  Seleted, 
  SelectedValue, 
  Arrow, 
  OptionBox, 
  Option, 
  InputPicture, 
  IconWrapper, 
  PictureIcon, 
  PictureButton, 
  ButtonArea,
  CompleteButton
} from "./ReviewCreate.styles";
import arrow from "../../../assets/icons/bottom-arrow.svg";
import TextArea from "../../atoms/TextArea/TextArea";
import camera from "../../../assets/icons/camera.svg";
import { PageDes } from "../Home/Home.styles";
import { useState } from "react";

const inputTitle = ["제목", "제품명", "제품 링크"];

export default function ReviewCreate() {
  const [ option, setOption ] = useState(false);

  const handleOption = () => {
    setOption(!option);
  }

  console.log(option);

  return (
    <ReviewCreatePage action="" method="">
      <ReviewInfoArea>
        <SubArea>
          {inputTitle.map((title, idx) => {
            return (
              <InputArea key={idx}>
                <h3>{title}</h3>
                <Input className="" color="white" width="100%" height="40px" />
              </InputArea>
            )
          })}
          <InputArea>
            <h3>별점</h3>
            <Stars grade={4} />
          </InputArea>
        </SubArea>
        <SubArea>
          <InputArea>
            <h3>카테고리</h3>
            <SelectBox>
              <Seleted>
                <SelectedValue>카테고리</SelectedValue>
              </Seleted>
              <Arrow category={arrow} onClick={handleOption} />
              <OptionBox on={option}>
                <Option>컴퓨터</Option>
                <Option>노트북</Option>
                <Option>핸드폰</Option>
                <Option>가전제품</Option>
              </OptionBox>
            </SelectBox>
          </InputArea>
          <InputArea>
            <h3>제품 사진</h3>
            <InputPicture>
              <IconWrapper>
                <PictureIcon category={camera} />
                <PageDes>제품 사진을 등록해보세요</PageDes>
                <PictureButton>사진 등록</PictureButton>
              </IconWrapper>
            </InputPicture>
          </InputArea>
        </SubArea>
      </ReviewInfoArea>
      <InputArea style={{"width": "50%", "minWidth": "800px"}}>
        <h3>리뷰</h3>
        <TextArea color="white" width="100%" height="400px" />
      </InputArea>
      <ButtonArea>
        <CompleteButton buttonType="cancel">취소</CompleteButton>
        <CompleteButton buttonType="write" type="submit">등록</CompleteButton>
      </ButtonArea>
    </ReviewCreatePage>
  )
}