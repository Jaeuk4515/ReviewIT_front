import styled from "styled-components";
import { Img } from "../../atoms/Category/Category.styles";
import Divider from "../../atoms/Divider/Divider";
import { CommentArea } from "../../blocks/CommentItem/CommentItem.styles";

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
  background-color: ${({ theme }) => theme.myPageBgColor};
  padding: 50px 30px;
  box-sizing: border-box;
  gap: 2rem;
  border-radius: 15px;
`

const ProfileUpdateCard = styled.div`
  width: 80%;
  min-width: 700px;
  height: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: 15px;
  background-color: ${({ theme }) => theme.backgroundColor};
  gap: 6rem;
`

const UserImage = styled(Img)<{theme: "light" | "dark"}>`
  width: 180px;
  height: 180px;
  border: 1px solid ${props => props.theme === "light" ? "rgba(0, 0, 0, .1)" : "rgba(255, 255, 255, .3)"};
  border-radius: 100px;
  position: relative;
  background-size: cover;
`

const UserImageCover = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 100px;
  background-color: black;
  background-color: rgba(0, 0, 0, 0.5);  // opacity는 자식요소들의 투명도까지 바꿈. UserImageCover의 배경만 투명도 조절 
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0; left: 0;
`

const InitButton = styled.div`
  background-color: #EAEAEA;
  color: black;
  width: 120px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
`

const InputAndButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2.5rem;
  width: 45%;
  margin-top: 20px;
`

const ButtonArea = styled.div`
  display: flex;
  gap: .6rem;
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

const DeleteIdButton = styled(UpdateButton)`
  background-color: red;
  width: 90px;
`

const SlimDivider = styled(Divider)`
  border: 1px solid rgba(0, 0, 0, .1);
`

const UserReviewArea = styled(InputAndButtonArea)`
  align-items: center;
  width: 80%;
  gap: 1.5rem;
  margin: 0;
`

const ReviewOptionArea = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: center;
`

const CommentCard = styled(CommentArea)`
  width: 100%;
  min-width: 700px;
  background-color: ${({ theme }) => theme.backgroundColor};
  border: 1px solid rgba(0, 0, 0, .1); 
  border-radius: 30px; 
  padding: 16px 30px;
  cursor: pointer;
`

export { MyPageArea, InfoArea, ProfileUpdateCard, UserImage, UserImageCover, InitButton, InputAndButtonArea, ButtonArea, UpdateButton, DeleteIdButton, SlimDivider, UserReviewArea, ReviewOptionArea, CommentCard };