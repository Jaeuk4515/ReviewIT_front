import styled from "styled-components";
import { Img } from "../../atoms/Category/Category.styles";
import { InputAndButtonArea } from "../../pages/MyPage/MyPage.styles";

const InfoCard = styled(InputAndButtonArea)`
  width: 100%;
  height: 140px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const ProductImage = styled(Img)`
  width: 110px;
  height: 110px;
`

const ReviewInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  height: 100px;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: 15px;
`

const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`

const DateInfo = styled.div`
  width: 13%;
  height: 100px;
  display: flex;
  justify-content: flex-end;
`

export { InfoCard, ProductImage, ReviewInfo, TextInfo, DateInfo };