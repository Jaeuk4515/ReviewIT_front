import styled from "styled-components";
import { InputAndButtonArea } from "../../pages/MyPage/MyPage.styles";
import { ProductImg } from "../Post/Post.styles";

const InfoCard = styled(InputAndButtonArea)`
  width: 100%;
  // min-width: 700px;
  height: 140px;
  background-color: ${({ theme }) => theme.backgroundColor};
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  cursor: pointer;
  gap: 0;

  @media screen and (max-width: 900px) {
    min-width: 455px;
    height: 120px;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    min-width: 300px;
    height: 110px;
    border-radius: 20px;
  };
  @media screen and (max-width: 500px) {
    min-width: 250px;
    height: 90px;
    border-radius: 17px;
  };
  @media screen and (max-width: 400px) {
    height: 85px;
    border-radius: 16px;
  };
`

const ProductImage = styled(ProductImg)`
  width: 115px;
  min-width: initial;
  height: auto;
  min-height: initial;
  aspect-ratio: 1;
  margin-left: 35px;

  @media screen and (max-width: 900px) {
    width: 100px;
    margin-left: 30px;
    border-radius: 16px;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    width: 90px;
    margin-left: 25px;
    border-radius: 13px;
  };
  @media screen and (max-width: 500px) {
    width: 75px;
    margin-left: 20px;
    border-radius: 10px;
  };
  @media screen and (max-width: 400px) {
    width: 70px;
    margin-left: 16px;
    border-radius: 9px;
  };
`

const ReviewInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  height: 100px;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: 15px;

  @media screen and (max-width: 900px) {
    height: 85px;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    height: 80px;
  };
  @media screen and (max-width: 500px) {
    height: 68px;
  };
  @media screen and (max-width: 400px) {
    height: 64px;
  };
`

const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  width: 100%;

  @media screen and (max-width: 900px) {
    gap: .4rem;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    gap: .3rem;
  };
  @media screen and (max-width: 500px) {
    gap: .2rem;
  };
`

const TitleSpan = styled.span`
  font-size: 20px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (max-width: 900px) {
    font-size: 17px;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    font-size: 16px;
  };
  @media screen and (max-width: 500px) {
    font-size: 14px;
  };
  @media screen and (max-width: 400px) {
    font-size: 13px;
  };
`

const NameSpan = styled(TitleSpan)`
  font-size: 18px;

  @media screen and (max-width: 900px) {
    font-size: 16px;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    font-size: 15px;
  };
  @media screen and (max-width: 500px) {
    font-size: 13px;
  };
  @media screen and (max-width: 400px) {
    font-size: 12px;
  };
`

const DateInfo = styled.div`
  width: 13%;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  margin-right: 45px;
  font-size: 14px;
  color: #929292;
  white-space: nowrap;

  @media screen and (max-width: 900px) {
    height: 85px;
    font-size: 12px;
    margin-right: 40px;
  };
  @media screen and (max-width: 750px) {
    font-size: 11px;
    margin-right: 30px;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    height: 80px;
    font-size: 10px;
    margin-right: 25px;
  };
  @media screen and (max-width: 500px) {
    height: 68px;
    font-size: 9px;
    margin-right: 20px;
  };
  @media screen and (max-width: 400px) {
    height: 64px;
    font-size: 8px;
    margin-right: 15px;
  };
`

export { InfoCard, ProductImage, ReviewInfo, TextInfo, TitleSpan, NameSpan, DateInfo };