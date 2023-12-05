import styled from "styled-components";
import ImageCard from "../../atoms/ImageCard/ImageCard";
import DirectionButton from "../../atoms/DirectionButton/DirectionButton";

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  width: 800px;
  height: 350px;
  border: 1px solid #C4C4C4;
  border-radius: 20px;
  background-color: #F5F5F5;
`

const ReviewImg = styled(ImageCard)`
  width: 280px;
  height: 280px;
  background-size: cover;
  display: inline-block;
  // border-radius: 0;
  // box-shadow: none;
  margin: 0 20px 0 60px;
  transition: .1s;
`

const PrevButton = styled(DirectionButton)`
  position: absolute;
  top: 110px; left: 15px;
  z-index: 10;
`

const NextButton = styled(PrevButton)`
  left: initial; right: -23px;
`

const VerticalDivider = styled.div`
  width: 0;
  height: 250px;
  border: 1px solid #C4C4C4;
`

const ReviewInfo = styled.div`
  width: 380px;
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
  justify-content: center;
`

const InfoArea = styled.div`
  width: 300px;
  display: flex;
  padding: 0 7px;
`

const LinkArea = styled.a`
  border-radius: 15px;
  box-shadow: 0 0 5px #C4C4C4;
  width: 300px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: white;
  box-sizing: border-box;
  text-decoration: none;
`

const ProductName = styled.span`
  font-size: 30px;
  font-weight: bold;
`

const ProductLink = styled.span`
  font-size: 20px;
  width: 70%;
`

export { Card, ReviewImg, PrevButton, NextButton, VerticalDivider, ReviewInfo, InfoArea, LinkArea, ProductName, ProductLink }