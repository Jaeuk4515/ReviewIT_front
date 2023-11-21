import { Link, useParams } from "react-router-dom";
import Comment from "../../atoms/Comment/Comment";
import Likey from "../../atoms/Likey/Likey";
import CommentForm from "../../blocks/CommentForm/CommentForm";
import CommentItem, { CommentItemType } from "../../blocks/CommentItem/CommentItem";
import { Profile, UserInfoArea, UserName, WritedTime } from "../../blocks/CommentItem/CommentItem.styles";
import ReviewCard from "../../blocks/ReviewCard/ReviewCard";
import { ReviewDetailPage, UserInfoWrapper, ListButton, PostContent, ReviewTitle, ContentText, ExtraInfoWrapper, ExtraInfo, CommentArea } from "./ReviewDetail.styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { content } from "../ReviewCreate/ReviewCreate";
import getUserInfoById from "../../../services/getUserInfoById";

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
  nickname: string;
  userImage: string;
}

export default function ReviewDetail({ isLogin }: {isLogin: boolean}) {
  const param = useParams();
  const [ reviewInfo, setReviewInfo ] = useState<ReviewInfo>({
    userId: "",
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
      const { nickname, userImage } = await getUserInfoById(response.data.userId);
      const date = new Date(response.data.createdAt);
      setReviewInfo({
        ...response.data,
        createdAt: `${date.toLocaleDateString('ko-KR')} ${date.toLocaleTimeString('ko-KR')}`,
        nickname: nickname,
        userImage: userImage
      });
    };

    getReviewInfo();
  }, []);

  return (
    <ReviewDetailPage>
      <UserInfoWrapper>
        <UserInfoArea style={{"marginLeft": "15px"}}>
          <Profile className="" url={reviewInfo.userImage} onClick={()=>{}} />
          <UserName>{reviewInfo.nickname}</UserName>
          <WritedTime>{reviewInfo.createdAt}</WritedTime>
        </UserInfoArea>
        <Link to="/posts"><ListButton>목록</ListButton></Link>
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