import { MyPageArea, InfoArea, ProfileUpdateCard, UserImage, InputAndButtonArea, UpdateButton, SlimDivider, UserReviewArea, ReviewOptionArea } from "./MyPage.styles"
import user_default from "../../../assets/icons/user_default.svg";
import { InputArea } from "../ReviewCreate/ReviewCreate.styles";
import Input from "../../atoms/Input/Input";
import Category from "../../atoms/Category/Category";
import UserReviewInfo from "../../blocks/UserReviewInfo/UserReviewInfo";

export default function MyPage() {
  return (
    <MyPageArea>
      <InfoArea>
        <ProfileUpdateCard>
          <UserImage category={user_default} />
          <InputAndButtonArea>
            <InputArea style={{gap: ".6rem", width: "100%"}}>
              <h3>닉네임</h3>
              <Input type="text" className="" color="white" width="100%" height="40px" name="reviewTitle" value="" onChange={() => {}} />
            </InputArea>
            <UpdateButton><span style={{color: "white", fontWeight: "bold", fontSize: "17px"}}>저장</span></UpdateButton>
          </InputAndButtonArea>
        </ProfileUpdateCard>
        <SlimDivider className="" width="93%" />
        <UserReviewArea>
          <ReviewOptionArea>
            <Category categoryName="작성한 리뷰" nameLeftPadding="0px" onClick={() => {}} width="165px" />
            <Category categoryName="좋아요 한 리뷰" nameLeftPadding="0px" onClick={() => {}} width="190px" />
          </ReviewOptionArea>
          <UserReviewInfo />
        </UserReviewArea>
      </InfoArea>
    </MyPageArea>
  )
}