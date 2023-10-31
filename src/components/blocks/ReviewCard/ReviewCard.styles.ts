import styled from "styled-components";
import ImageCard from "../../atoms/ImageCard/ImageCard";

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  width: 800px;
  height: 350px;
  border: 1px solid #C4C4C4;
  border-radius: 20px;
`

const ReviewImg = styled(ImageCard)`
  width: 280px;
  height: 280px;
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

const LinkArea = styled(InfoArea)`
  border-radius: 15px;
  box-shadow: 0 0 5px #C4C4C4;
  width: 300px;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 20px;
`

const ProductName = styled.span`
  font-size: 30px;
  font-weight: bold;
`

const ProductLink = styled.a`
  text-decoration: none;
  font-size: 20px;
`

export { Card, ReviewImg, VerticalDivider, ReviewInfo, InfoArea, LinkArea, ProductName, ProductLink }