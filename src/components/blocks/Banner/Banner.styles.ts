import styled from "styled-components";
import { Img } from "../../atoms/Category/Category.styles";
import { getImgStyles, getMainTextStyles, getSubTextStyles, getTextAreaStyles } from "../../../services/getStyles";

const BannerArea = styled.div<{backgroundcolor: string}>`
  width: 100%;
  min-width: 380px;
  height: 430px;
  margin-top: -56px;
  display: flex;
  justify-content: center;
  background-color: ${props => props.backgroundcolor};

  @media ${({ theme }) => theme.mediaQuery.medium} {
    height: 370px;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    height: 320px;
  };
`

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
  min-width: 1200px;
  height: 100%;
  position: relative;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    width: 85%;
    min-width: 600px;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    width: 85%;
    min-width: 300px;
  };
`

const PosterImg = styled(Img)<{num: number, width: string, height: string, top?: string, left?: string, right?: string, bottom?: string}>`
  width: ${props => props.width};
  height: ${props => props.height};
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  bottom: ${props => props.bottom};

  @media ${({ theme }) => theme.mediaQuery.medium} {
    ${props => getImgStyles(props.num, "medium")}
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    ${props => getImgStyles(props.num, "small")}
  };
`

const TextArea = styled.div<{num: number, top?: string, left?: string, right?: string, bottom?: string}>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: .7rem;
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  bottom: ${props => props.bottom};

  @media ${({ theme }) => theme.mediaQuery.medium} {
    ${props => getTextAreaStyles(props.num, "medium")}
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    ${props => getTextAreaStyles(props.num, "small")}
  };
`

const MainText = styled.p<{num: number, color: string}>`
  font-size: 30px;
  font-weight: bold;
  color: ${props => props.color};

  @media ${({ theme }) => theme.mediaQuery.medium} {
    ${props => getMainTextStyles(props.num, "medium")}
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    ${props => getMainTextStyles(props.num, "small")}
  };
`

const SubText = styled.p<{num: number, color: string}>`
  font-size: 18px;
  color: ${props => props.color};
  max-width: 480px;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    ${props => getSubTextStyles(props.num, "medium")}
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    ${props => getSubTextStyles(props.num, "small")}
  };
`

const ButtonNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50px;
  position: absolute;
  bottom: 13px;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    display: none;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    display: none;
  };
`

const ShiftButton = styled.div<{active: "on" | "off"}>`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: ${props => props.active === "on" ? "#256FFF" : "#D9D9D9"};
  cursor: pointer;
`

export { BannerArea, ContentWrapper, PosterImg, TextArea, MainText, SubText, ButtonNav, ShiftButton };