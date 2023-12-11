import styled from "styled-components";
import { Img } from "../../atoms/Category/Category.styles";
import Divider from "../../atoms/Divider/Divider";

const MyPageArea = styled.div`
  width: 100%;
  // min-height: calc( 100vh - 355px );
  min-height: 100vh;
  display: flex;
  justify-content: center;
  // align-items: center;
  margin-top: -20px;
`

const InfoArea = styled.div`
  width: 60%;
  min-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F8F8F8;
  padding: 30px;
  box-sizing: border-box;
  gap: 2rem;
  border-radius: 15px;
`

const ProfileUpdateCard = styled.div`
  width: 90%;
  height: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: 15px;
  background-color: white;
  gap: 5rem;
`

const UserImage = styled(Img)`
  width: 160px;
  height: 160px;
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: 80px;
`

const InputAndButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2.5rem;
  width: 45%;
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
`

const SlimDivider = styled(Divider)`
  border: 1px solid rgba(0, 0, 0, .1);
`

const UserReviewArea = styled(InputAndButtonArea)`
  align-items: center;
  width: 90%;
  gap: 1.5rem;
`

const ReviewOptionArea = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
`

export { MyPageArea, InfoArea, ProfileUpdateCard, UserImage, InputAndButtonArea, UpdateButton, SlimDivider, UserReviewArea, ReviewOptionArea };