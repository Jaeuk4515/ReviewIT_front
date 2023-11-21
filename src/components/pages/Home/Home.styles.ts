import styled from "styled-components";
import { Logo } from "../../blocks/AuthModal/AuthModal.styles";
import { FooterText } from "../../blocks/Footer/Footer.styles";
import right from "../../../assets/icons/right.svg";
import DirectionButton from "../../atoms/DirectionButton/DirectionButton";
import Post from "../../blocks/Post/Post";
import { NextButton, PrevButton } from "../../blocks/ReviewCard/ReviewCard.styles";

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 3.5rem;
  margin-bottom: 100px;
`

const Banner = styled.div`
  width: 65%;
  min-width: 800px;
  height: 370px;
  border-radius: 15px;
  background-color: #D9D9D9;
`

const PagePart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 60%;
  min-width: 800px;
`

const ContentArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`

const PageText = styled.div`
  display: flex;
  flex-direction: column;
  gap: .3rem;
`

const PageTitle = styled.div`
  display: flex;
  // align-items: center;
  gap: .7rem;
`

const PageIcon = styled(Logo)<{url: string}>`
  background-image: url(${props => props.url});
  width: 30px;
  height: 30px;
`

const PageTitleText = styled.span`
  font-size: 26px;
  font-weight: bold;
`

const PageDes = styled(FooterText)`

`

const MoreButton = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  height: 25px;
  cursor: pointer;
`

const MoreText = styled(FooterText)`
  color: black;
  font-size: 18px;
  height: 25px;
  line-height: 25px;
`

const MoreIcon = styled(Logo)`
  background-image: url(${right});
  width: 20px;
  height: 20px;
`

const PostArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
`

const Carousel = styled.div`
  overflow: hidden;
  width: 100%;
`

const ImgWrapper = styled.div<{ multi: number, leftOffSet: number }>`
  display: flex;
  width: ${props => props.multi * 100}%;
  position: relative;
  left: ${props => props.leftOffSet}px;
  transition: .35s;
`

const PostWrapper = styled.div`
  display: flex;
  width: 100%;
`

const LeftShiftButton = styled(PrevButton)`
  top: 85px; left: -25px;
`

const RightShiftButton = styled(NextButton)`
  top: 85px; right: -25px;
`

export { HomePage, Banner, PagePart, ContentArea, PageText, PageTitle, PageIcon, PageTitleText, PageDes, MoreButton, MoreText, MoreIcon, PostArea, Carousel, ImgWrapper, PostWrapper, LeftShiftButton, RightShiftButton }