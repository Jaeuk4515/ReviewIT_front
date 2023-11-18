import { useParams } from "react-router-dom";
import Comment from "../../atoms/Comment/Comment";
import Likey from "../../atoms/Likey/Likey";
import CommentForm from "../../blocks/CommentForm/CommentForm";
import CommentItem, { CommentItemType } from "../../blocks/CommentItem/CommentItem";
import { Profile, UserInfoArea, UserName, WritedTime } from "../../blocks/CommentItem/CommentItem.styles";
import ReviewCard from "../../blocks/ReviewCard/ReviewCard";
import { PostObject } from "../Review/Review";
import { ReviewDetailPage, UserInfoWrapper, ListButton, PostContent, ReviewTitle, ContentText, ExtraInfoWrapper, ExtraInfo, CommentArea } from "./ReviewDetail.styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { content } from "../ReviewCreate/ReviewCreate";

// interface reviewContentType extends CommentItemType, PostObject {
//   productLink: string;
//   commentAmount: number;
//   likeyAmount: number;
//   isLogin: boolean;
// }
interface ReviewInfo extends Omit<content, 'productImages'> {
  likey: number;
  createdAt: string;
  productImages: string[];
}

export default function ReviewDetail({ isLogin }: {isLogin: boolean}) {
  const param = useParams();
  const [ reviewInfo, setReviewInfo ] = useState<ReviewInfo>({
    nickname: "",
    userImage: "",
    reviewTitle: "",
    category: "",
    productName: "",
    productLink: "",
    productImages: [],
    reviewContent: "",
    grade: 0,
    likey: 0,
    createdAt: ""
  });
  
  console.log(reviewInfo);

  useEffect(() => {
    const getReviewInfo = async () => {
      const response = await axios.get(`http://localhost:3001/review/${param.pId}`);
      // console.log(response.data);
      setReviewInfo({
        ...response.data
      });
    };

    getReviewInfo();
  }, [])
  return (
    <ReviewDetailPage>
      <UserInfoWrapper>
        <UserInfoArea style={{"marginLeft": "15px"}}>
          <Profile className="" url={reviewInfo.userImage} onClick={()=>{}} />
          <UserName>{reviewInfo.nickname}</UserName>
          <WritedTime>{reviewInfo.createdAt}</WritedTime>
        </UserInfoArea>
        <ListButton>목록</ListButton>
      </UserInfoWrapper>
      <PostContent>
        <ReviewTitle>{reviewInfo.reviewTitle}</ReviewTitle>
        <ReviewCard urls={reviewInfo.productImages} name={reviewInfo.productName} grade={reviewInfo.grade} link={reviewInfo.productLink} />
        <ContentText>{reviewInfo.reviewContent}</ContentText>
        <ExtraInfoWrapper>
          <ExtraInfo>
            {/* <Comment amount={commentAmount} /> */}
            <Likey amount={reviewInfo.likey} />
          </ExtraInfo>
        </ExtraInfoWrapper>
      </PostContent>
      <CommentForm isLogin={isLogin} url={reviewInfo.userImage} />
      <CommentArea>
        {/* <CommentItem userImageUrl={userImageUrl} userName={userName} time={time} text={text} />
        <CommentItem userImageUrl={userImageUrl} userName={userName} time={time} text={text} /> */}
      </CommentArea>
    </ReviewDetailPage>
  )
}