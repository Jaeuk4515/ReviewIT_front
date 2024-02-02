import styled from "styled-components";
import { Img } from "../../atoms/Category/Category.styles";
import Divider from "../../atoms/Divider/Divider";
import { CommentArea } from "../../blocks/CommentItem/CommentItem.styles";
import { ImageUploadButton } from "../ReviewCreate/ReviewCreate.styles";
import Input from "../../atoms/Input/Input";

const MyPageArea = styled.div`
  width: 100%;
  min-width: 325px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  margin: 60px 0 100px 0;

  @media screen and (max-width: 500px) {
    margin: 30px 0 60px 0;
  };
`

const InfoArea = styled.div`
  width: 60%;
  min-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.myPageBgColor};
  padding: 50px 30px;
  box-sizing: border-box;
  gap: 2rem;
  border-radius: 15px;

  @media screen and (max-width: 900px) {
    width: 90%;
    min-width: 650px;
    padding: 35px 20px;
  };
  @media screen and (max-width: 700px) {
    min-width: 450px;
    padding: 30px 10px;
  };
  @media screen and (max-width: 500px) {
    width: 95%;
    min-width: 270px;
    padding: 20px 5px;
  };
`

const ProfileUpdateCard = styled.div`
  width: 95%;
  min-width: 700px;
  height: 230px;
  // height: auto;
  // aspect-ratio: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: 15px;
  background-color: ${({ theme }) => theme.backgroundColor};
  gap: 6rem;

  @media screen and (max-width: 900px) {
    width: 90%;
    height: 210px;
    min-width: 580px;
  };
  @media screen and (max-width: 700px) {
    height: 180px;
    min-width: 300px;
  };
  @media screen and (max-width: 500px) {
    height: 150px;
    min-width: 220px;
  };
`

const UserInfoWrapper = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 900px) {
    width: 80%;
  };
  @media screen and (max-width: 700px) {
    width: 85%;
  };
  @media screen and (max-width: 700px) {
    width: 88%;
  };
`

const UserImage = styled(Img)<{imagetheme: "light" | "dark"}>`
  width: 180px;
  height: 180px;
  // width: 33%;
  // height: auto;
  // aspect-ratio: 1;
  border: 1px solid ${props => props.imagetheme === "light" ? "rgba(0, 0, 0, .1)" : "rgba(255, 255, 255, .3)"};
  border-radius: 100px;
  position: relative;
  background-size: cover;

  @media screen and (max-width: 900px) {
    width: 160px;
    height: 160px;
  };
  @media screen and (max-width: 700px) {
    width: 130px;
    height: 130px;
  };
  @media screen and (max-width: 500px) {
    width: 100px;
    height: 100px;
  };
`

const UserImageCover = styled.div`
  // width: 180px;
  // height: 180px;
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  border-radius: 100px;
  background-color: black;
  background-color: rgba(0, 0, 0, 0.5);  // opacity는 자식요소들의 투명도까지 바꿈. UserImageCover의 배경만 투명도 조절 
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0; left: 0;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: .6rem;

  @media screen and (max-width: 900px) {
    gap: .5rem;
  };
  @media screen and (max-width: 700px) {
    gap: .4rem;
  };
  @media screen and (max-width: 500px) {
    gap: .3rem;
  };
`

const ImageChangeButton = styled(ImageUploadButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: auto;
  aspect-ratio: 3;
  line-height: initial;

  @media screen and (max-width: 900px) {
    border-radius: 9px;
    font-size: 15px;
  };
  @media screen and (max-width: 700px) {
    border-radius: 8px;
    font-size: 13.5px;
  };
  @media screen and (max-width: 500px) {
    border-radius: 7px;
    font-size: 11px;
  };
`

const InitButton = styled(ImageChangeButton)``

const InputAndButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  width: 53%;
  height: 140px;
  margin-top: 20px;

  @media screen and (max-width: 900px) {
    height: 125px;
    margin-top: 10px;
  };
  @media screen and (max-width: 700px) {
    height: 105px;
    margin-top: 5px;
  };
  @media screen and (max-width: 500px) {
    height: 85px;
    margin-top: 0;
  };
`

const FormArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: .7rem;
  width: 100%;

  @media screen and (max-width: 900px) {
    gap: .6rem;
  };
  @media screen and (max-width: 700px) {
    gap: .5rem;
  };
  @media screen and (max-width: 500px) {
    gap: .4rem;
  };
`

const InputTitle = styled.span`
  font-weight: bold;
  font-size: 18px;

  @media screen and (max-width: 900px) {
    font-size: 16.5px;
  };
  @media screen and (max-width: 700px) {
    font-size: 15px;
  };
  @media screen and (max-width: 500px) {
    font-size: 12px;
  };
`

const InputBox = styled(Input)`
  @media screen and (max-width: 900px) {
    height: 35px;
    font-size: 16.5px;
    padding: 0 13px;
  };
  @media screen and (max-width: 700px) {
    height: 30px;
    font-size: 15px;
    padding: 0 11px;
  };
  @media screen and (max-width: 500px) {
    height: 25px;
    font-size: 12px;
    padding: 0 8px;
  };
`

const ButtonArea = styled.div`
  display: flex;
  gap: .6rem;

  @media screen and (max-width: 900px) {
    gap: .5rem;
  };
  @media screen and (max-width: 700px) {
    gap: .4rem;
  };
  @media screen and (max-width: 500px) {
    gap: .3rem;
  };
`

const UpdateButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-radius: 10px;
  height: 35px;
  width: 55px;
  cursor: pointer;
  color: white;
  font-weight: bold;

  @media screen and (max-width: 900px) {
    width: 45px;
    height: 30px;
    font-size: 14px;
    border-radius: 8.5px;
  };
  @media screen and (max-width: 700px) {
    width: 35px;
    height: 25px;
    font-size: 12px;
    border-radius: 7px;
  };
  @media screen and (max-width: 500px) {
    width: 30px;
    height: 20px;
    font-size: 10px;
    border-radius: 6px;
  };
`

const DeleteIdButton = styled(UpdateButton)`
  background-color: red;
  width: 90px;

  @media screen and (max-width: 900px) {
    width: 75px;
  };
  @media screen and (max-width: 700px) {
    width: 60px;
  };
  @media screen and (max-width: 500px) {
    width: 50px;
  };
`

const SlimDivider = styled(Divider)<{linetheme: "light" | "dark"}>`
  border: ${props => props.linetheme === "light" ? "1px solid rgba(0, 0, 0, .1)" : "1px solid rgba(255, 255, 255, .2)"};
  min-width: 250px;
`

const UserReviewArea = styled(InputAndButtonArea)`
  align-items: center;
  width: 90%;
  height: auto;
  gap: 1.5rem;
  margin: 0;
`

const ReviewOptionArea = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: center;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    gap: .6rem;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    gap: .2rem;
  };
  @media screen and (max-width: 400px) {
    gap: .1rem;
  };
`

const CommentCard = styled(CommentArea)`
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundColor};
  border: 1px solid rgba(0, 0, 0, .1); 
  border-radius: 25px; 
  padding: 16px 30px;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    padding: 8px 16px 15px 16px;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    border-radius: 21px;
    padding: 12px 12px;
  };
  @media screen and (max-width: 500px) {
    border-radius: 20px;
    padding: 12px 12px;
  };
`

export { MyPageArea, InfoArea, ProfileUpdateCard, UserInfoWrapper, UserImage, UserImageCover, ButtonWrapper, ImageChangeButton, InitButton, InputAndButtonArea, FormArea, InputTitle, InputBox, ButtonArea, UpdateButton, DeleteIdButton, SlimDivider, UserReviewArea, ReviewOptionArea, CommentCard };