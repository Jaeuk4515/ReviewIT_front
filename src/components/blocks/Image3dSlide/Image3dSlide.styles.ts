import styled from "styled-components";
import { getImageStyle } from "../../../services/getImageStyle";
import { ReviewImg } from "../ReviewCard/ReviewCard.styles";

const Slider = styled.div`
  width: 90%;
  height: 100%;
  // aspect-ratio: 1;
  // position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Radio = styled.input`
  display: none;
`

const ImageList = styled.ul`
  // width: 90%;
  // aspect-ratio: 1.15;
`

const ImageItem = styled.li<{idx: number, checkedindex: number}>`
  position: absolute;
  width: 100%;
  height: 100%;

  ${props => getImageStyle(props.checkedindex)};
`

const ImageCard = styled(ReviewImg)`
  box-shadow: 14px -5px 35px -21px rgba(0,0,0,0.66);
`

const BulletWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  z-index: 5;
  display: flex;
  gap: .3rem;
`

const Bullet = styled.label<{active: "yes" | "no"}>`
  display: inline-block;
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: 50%;
  background-color: ${props => props.active === "yes" ? "#fff" : "rgba(0,0,0,0.55)"};
  width: 15px;
  height: 15px;
  cursor: pointer;
`

export { Slider, Radio, ImageList, ImageItem, ImageCard, BulletWrapper, Bullet };