import Comment from "../../atoms/Comment/Comment";
import Likey from "../../atoms/Likey/Likey";
import CommentForm from "../../blocks/CommentForm/CommentForm";
import CommentItem, { CommentItemType } from "../../blocks/CommentItem/CommentItem";
import { Profile, UserInfoArea, UserName, WritedTime } from "../../blocks/CommentItem/CommentItem.styles";
import ReviewCard from "../../blocks/ReviewCard/ReviewCard";
import { PostObject } from "../Review/Review";
import { ReviewDetailPage, UserInfoWrapper, ListButton, PostContent, ReviewTitle, ContentText, ExtraInfoWrapper, ExtraInfo, CommentArea } from "./ReviewDetail.styles";

interface reviewContentType extends CommentItemType, PostObject {
  productLink: string;
  commentAmount: number;
  likeyAmount: number;
  isLogin: boolean;
}

export default function ReviewDetail({ userImageUrl, userName, time, text, productUrl, productName, grade, content, productLink, commentAmount, likeyAmount, isLogin }: reviewContentType) {
  return (
    <ReviewDetailPage>
      <UserInfoWrapper>
        <UserInfoArea style={{"marginLeft": "15px"}}>
          <Profile className="" url={userImageUrl} />
          <UserName>{userName}</UserName>
          <WritedTime>{time}</WritedTime>
        </UserInfoArea>
        <ListButton>목록</ListButton>
      </UserInfoWrapper>
      <PostContent>
        <ReviewTitle>{text}</ReviewTitle>
        <ReviewCard url={productUrl} name={productName} grade={grade} link={productLink} />
        <ContentText>{content}</ContentText>
        <ExtraInfoWrapper>
          <ExtraInfo>
            <Comment amount={commentAmount} />
            <Likey amount={likeyAmount} />
          </ExtraInfo>
        </ExtraInfoWrapper>
      </PostContent>
      <CommentForm isLogin={isLogin} url={userImageUrl} />
      <CommentArea>
        <CommentItem userImageUrl={userImageUrl} userName={userName} time={time} text={text} />
        <CommentItem userImageUrl={userImageUrl} userName={userName} time={time} text={text} />
      </CommentArea>
    </ReviewDetailPage>
  )
}