import styled from "styled-components";
import { Logo } from "../../blocks/Modal/AuthModal/AuthModal.styles";
import { FooterText } from "../../blocks/Footer/Footer.styles";
import { ReactComponent as Right } from "../../../assets/icons/right.svg";
import { NextButton, PrevButton } from "../../blocks/ReviewCard/ReviewCard.styles";

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 5rem;
  margin-bottom: 100px;

  @media ${({ theme }) => theme.mediaQuery.small} {
    gap: 3rem;
    margin-bottom: 60px;
  };
`

const PagePart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 60%;
  min-width: 800px;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    width: 90%;
    max-width: 800px;
    min-width: initial;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    gap: 1.2rem;
  };
`

const ContentArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`

const RecommendCardArea = styled(ContentArea)`
  @media ${({ theme }) => theme.mediaQuery.medium} {
    justify-content: initial;
    gap: .5rem;
  };
  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: initial;
  };
`

const PageText = styled.div`
  display: flex;
  flex-direction: column;
  gap: .3rem;
`

const PageTitle = styled.div`
  display: flex;
  gap: .7rem;
`

const PageIcon = styled(Logo)<{url: string}>`
  background-image: url(${props => props.url});
  width: 30px;
  height: 30px;

  @media ${({ theme }) => theme.mediaQuery.small} {
    width: 23px;
    height: 23px;
  }
`

const PageTitleText = styled.span`
  font-size: 26px;
  font-weight: bold;

  @media ${({ theme }) => theme.mediaQuery.small} {
    font-size: 21px;
  }
`

const PageDes = styled(FooterText)`
  @media ${({ theme }) => theme.mediaQuery.small} {
    font-size: 10px;
  }
`

const MoreButton = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  height: 25px;
  cursor: pointer;
`

const MoreText = styled(FooterText)`
  color: ${({ theme }) => theme.textColor};
  font-size: 18px;
  height: 25px;
  line-height: 25px;

  @media ${({ theme }) => theme.mediaQuery.small} {
    font-size: 13px;
  }
`

const MoreIcon = styled(Right)`
  width: 20px;
  height: 15px;
  fill: ${({ theme }) => theme.rightIconColor};

  @media ${({ theme }) => theme.mediaQuery.small} {
    width: 15px;
    height: 10px;
  }
`

const PostArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
`

const Carousel = styled.div`
  display: flex;
  align-items: center;
  overflow: auto;
  width: 100%;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;

  &::-webkit-scrollbar {
    display: none;
  };

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  };
`

const LeftShiftButton = styled(PrevButton)`
  top: 65px; left: -25px;
`

const RightShiftButton = styled(NextButton)`
  top: 65px; right: -25px;
`

export { HomePage, PagePart, ContentArea, RecommendCardArea, PageText, PageTitle, PageIcon, PageTitleText, PageDes, MoreButton, MoreText, MoreIcon, PostArea, Carousel, LeftShiftButton, RightShiftButton }