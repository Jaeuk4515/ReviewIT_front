import styled from "styled-components";
import ImageCard from "../../atoms/ImageCard/ImageCard";
import DirectionButton from "../../atoms/DirectionButton/DirectionButton";

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 800px;
  aspect-ratio: 2.3;
  border: 1px solid #C4C4C4;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.reviewCardColor};

  @media ${({ theme }) => theme.mediaQuery.medium} {
    width: 90%;
  };
`

const ImgWrapper = styled.div`
  position: relative;
  width: 50%;
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ReviewImg = styled(ImageCard)`
  width: 280px;
  height: 280px;
  background-size: cover;
  align-items: center;
  transition: .1s;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    width: 70%;
    height: auto;
    aspect-ratio: 1;
  };
`

const PrevButton = styled(DirectionButton)`
  position: absolute;
  width: 15%;
  height: auto;
  aspect-ratio: 1;
  top: 40%; left: 3.5%;
  z-index: 10;
  display: flex;
`

const NextButton = styled(PrevButton)`
  left: initial; right: 3.5%;
`

const VerticalDivider = styled.div`
  width: 0;
  height: 75%;
  border: 1px solid #C4C4C4;
`

const InfoWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`

const ReviewInfo = styled.div`
  width: 310px;
  aspect-ratio: 1.05;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
  justify-content: center;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    width: 80%;
    gap: 1.5rem;
  };
  @media screen and (max-width: 650px) {
    gap: 1.2rem;
  };
  @media screen and (max-width: 500px) {
    gap: .9rem;
  }
`

const InfoArea = styled.div`
  width: 100%;
  display: flex;
  padding: 0 7px;
`

const LinkArea = styled.a`
  border-radius: 15px;
  box-shadow: 0 0 5px #C4C4C4;
  width: 300px;
  aspect-ratio: 4.3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.backgroundColor};
  box-sizing: border-box;
  text-decoration: none;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    width: 95%;
  };
  @media screen and (max-width: 650px) {
    padding: 8px 16px;
  };
  @media screen and (max-width: 500px) {
    padding: 4px 12px;
  };
`

const ProductName = styled.span`
  font-size: 30px;
  font-weight: bold;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    font-size: 26px;
  };
  @media screen and (max-width: 800px) {
    font-size: 22px;
  };
  @media screen and (max-width: 700px) {
    font-size: 19px;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    font-size: 17px;
  };
  @media screen and (max-width: 550px) {
    font-size: 16px;
  };
  @media screen and (max-width: 500px) {
    font-size: 15px;
  };
  @media screen and (max-width: 480px) {
    font-size: 14px;
  };
  @media screen and (max-width: 450px) {
    font-size: 13px;
  };
  @media screen and (max-width: 420px) {
    font-size: 12px;
  };
`

const ProductLink = styled.span`
  font-size: 20px;
  width: 70%;

  @media screen and (max-width: 800px) {
    font-size: 16px;
  };
  @media screen and (max-width: 700px) {
    font-size: 14.5px;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    font-size: 13px;
  };
  @media screen and (max-width: 450px) {
    font-size: 11.5px;
  };
  @media screen and (max-width: 420px) {
    font-size: 10px;
  };
`

export { Card, ImgWrapper, ReviewImg, PrevButton, NextButton, VerticalDivider, InfoWrapper, ReviewInfo, InfoArea, LinkArea, ProductName, ProductLink }