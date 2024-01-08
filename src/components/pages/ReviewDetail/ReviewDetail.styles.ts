import styled from "styled-components";
import { SubmitButton } from "../../blocks/CommentForm/CommentForm.styles";
import { HomePage, PageTitle } from "../Home/Home.styles";
import { Img } from "../../atoms/Category/Category.styles";
import { ReactComponent as Options } from "../../../assets/icons/options.svg";
import { ReactComponent as Update } from "../../../assets/icons/update.svg";
import { ReactComponent as Delete } from "../../../assets/icons/delete.svg";

const ReviewDetailPage = styled(HomePage)`
  gap: 2rem;

  @media ${({ theme }) => theme.mediaQuery.small} {
    gap: 1.5rem;
    margin: -20px 0 15px 0;
  };
`

const UserInfoWrapper = styled.div<{infotheme: "light" | "dark"}>`
  display: flex;
  justify-content: space-between;
  width: 825px;
  padding-bottom: 15px;
  border-bottom: 1px solid ${props => props.infotheme === "light" ? "rgba(0, 0, 0, .1)" : "rgba(255, 255, 255, .5)"};

  @media ${({ theme }) => theme.mediaQuery.medium} {
    width: 90%;
    max-width: 825px;
    min-width: 530px;
  };
  @media screen and (max-width: 800px) {
    padding-bottom: 10px;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    width: 90%;
    max-width: 530px;
    min-width: 300px;
  };
`

const ListButton = styled(SubmitButton)`
  background-color: #EAEAEA;
  color: black;
  width: 60px;

  @media screen and (max-width: 800px) {
    width: 50px;
    height: 25px;
    font-size: 12.5px;
  };
  @media screen and (max-width: 380px) {
    width: 42px;
    height: 23px;
    font-size: 12px;
  };
`

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 855px;
  gap: 2.5rem;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    width: 95%;
    max-width: 855px;
    min-width: 330px;
    gap: 1.5rem;
  };
`

const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  width: 100%;
  padding: 0 40px 0 30px;
  box-sizing: border-box;
  margin-bottom: -10px;
  position: relative;

  @media ${({ theme }) => theme.mediaQuery.small} {
    padding: 0 30px 0 20px;
  }
`

const ReviewTitle = styled.h2`
  @media screen and (max-width: 800px) {
    font-size: 22px;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    font-size: 20px;
  };
  @media screen and (max-width: 500px) {
    font-size: 18px;
  };
  @media screen and (max-width: 380px) {
    font-size: 16px;
  };
`

const OptionIcon = styled(Options)`
  width: 25px;
  height: 25px;
  cursor: pointer;
  fill: ${({ theme }) => theme.optionIconColor};
`

const MiniModal = styled.div`
  width: 100px;
  height: 70px;
  background-color: ${({ theme }) => theme.backgroundColor};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  box-shadow: 0 0 5px #C4C4C4;
  position: absolute;
  top: 35px; right: 28px;
  z-index: 1800;
  gap: .4rem;
`

const ButtonTitle = styled(PageTitle)`
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: .4;
  }
`

const UpdateIcon = styled(Update)`
  width: 15px;
  height: 17px;
  fill: ${({ theme }) => theme.textColor};
`

const DeleteIcon = styled(Delete)`
  width: 16px;
  height: 17px;
  fill: ${({ theme }) => theme.backgroundColor};
  stroke: ${({ theme }) => theme.textColor};
`

const ContentText = styled.p`
  width: 100%;
  min-width: 787px;
  font-size: 18px;
  line-height: 30px;
  margin-top: 25px;
  padding: 0 30px;
  box-sizing: border-box;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    min-width: 300px;
  };
  @media screen and (max-width: 800px) {
    margin-top: 10px;
    font-size: 16px;
    line-height: 26px;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    font-size: 14px;
    padding: 0 20px;
    line-height: 22px;
  };
  @media screen and (max-width: 450px) {
    font-size: 12px;
    line-height: 18px;
    margin-top: 0;
  }
`

const ExtraInfoWrapper = styled(UserInfoWrapper)`
  justify-content: space-between;
  margin-top: 40px;
  padding: 0 20px 15px 20px;
  box-sizing: border-box;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    width: 96%;
    max-width: 825px;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    margin-top: 20px;
    padding: 0 15px 10px 15px;
  };
  @media screen and (max-width: 400px) {
    margin-top: 10px;
    padding: 0 10px 8px 10px;
  };
`

const LikeyButton = styled.div`
  width: 35px;
  height: 30px;
  border: 1px solid rgba(0, 0, 0, .2);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: white;

  &:active {
    transform: scale(1.08);
  };

  @media ${({ theme }) => theme.mediaQuery.small} {
    width: 30px;
    height: 25px;
    border-radius: 8px;
  };
  @media screen and (max-width: 500px) {
    width: 26px;
    height: 21px;
    border-radius: 7px;
  };
  @media screen and (max-width: 400px) {
    width: 24px;
    height: 19px;
    border-radius: 7px;
  };
`

const LikeyIcon = styled(Img)`
  width: 22px;
  height: 18px;

  @media ${({ theme }) => theme.mediaQuery.small} {
    width: 20px;
    height: 15px;
  };
  @media screen and (max-width: 500px) {
    width: 18px;
    height: 13px;
  };
  @media screen and (max-width: 400px) {
    width: 16px;
    height: 11px;
  };
`

const ExtraInfo = styled.div`
  display: flex;
  gap: 1rem;

  @media ${({ theme }) => theme.mediaQuery.small} {
    gap: .8rem;
  };
  @media screen and (max-width: 500px) {
    gap: .6rem;
  };
  @media screen and (max-width: 400px) {
    gap: .4rem;
  };
`

const CommentArea = styled(PostContent)`
  width: 79%;
  max-width: 800px;
  min-width: 300px;
  gap: 1rem;
  margin-top: 10px;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    width: 87%;
    margin-top: 0;
  }
`

export { ReviewDetailPage, UserInfoWrapper, ListButton, PostContent, ReviewHeader, ReviewTitle, OptionIcon, MiniModal, ButtonTitle, UpdateIcon, DeleteIcon, ContentText, ExtraInfoWrapper, LikeyButton, LikeyIcon, ExtraInfo, CommentArea }