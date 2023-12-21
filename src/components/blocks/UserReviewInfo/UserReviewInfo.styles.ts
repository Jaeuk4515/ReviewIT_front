import styled from "styled-components";
import { InputAndButtonArea } from "../../pages/MyPage/MyPage.styles";
import { ProductImg } from "../Post/Post.styles";

const InfoCard = styled(InputAndButtonArea)`
  width: 100%;
  min-width: 700px;
  height: 140px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  cursor: pointer;
  gap: 0;
`

const ProductImage = styled(ProductImg)`
  width: 115px;
  height: 115px;
  margin-left: 35px;
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
  margin-right: 45px;
`

export { InfoCard, ProductImage, ReviewInfo, TextInfo, DateInfo };