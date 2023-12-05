import styled from "styled-components";
import { Img } from "../../atoms/Category/Category.styles";

const BannerArea = styled.div<{backgroundcolor: string}>`
  width: 100%;
  min-width: 1400px;
  height: 430px;
  margin-top: -56px;
  transition: .3s;
  display: flex;
  justify-content: center;
  background-color: ${props => props.backgroundcolor};
  transition: .5s;
`

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
  min-width: 1200px;
  height: 100%;
  position: relative;
`

const PosterImg = styled(Img)<{top?: string, left?: string, right?: string, bottom?: string}>`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
`

const TextArea = styled.div<{top?: string, left?: string, right?: string, bottom?: string}>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: .7rem;
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
`

const MainText = styled.p<{color: string}>`
  font-size: 30px;
  font-weight: bold;
  color: ${props => props.color};
`

const SubText = styled.p<{color: string}>`
  font-size: 18px;
  color: ${props => props.color};
  max-width: 480px;
`

const ButtonNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50px;
  position: absolute;
  bottom: 10px;
`

const ShiftButton = styled.div<{active: "on" | "off"}>`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: ${props => props.active === "on" ? "#256FFF" : "#D9D9D9"};
  cursor: pointer;
`

export { BannerArea, ContentWrapper, PosterImg, TextArea, MainText, SubText, ButtonNav, ShiftButton };