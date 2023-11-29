import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";
import Comment from "../../atoms/Comment/Comment";
import Likey from "../../atoms/Likey/Likey";
import CommentForm from "../../blocks/CommentForm/CommentForm";
import CommentItem, { CommentItemType } from "../../blocks/CommentItem/CommentItem";
import { Profile, UserInfoArea, UserName, WritedTime } from "../../blocks/CommentItem/CommentItem.styles";
import ReviewCard from "../../blocks/ReviewCard/ReviewCard";
import { ReviewDetailPage, UserInfoWrapper, ListButton, PostContent, ReviewHeader, ReviewTitle, OptionIcon, MiniModal, ButtonTitle, UpdateIcon, DeleteIcon, ContentText, ExtraInfoWrapper, ExtraInfo, CommentArea } from "./ReviewDetail.styles";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { content } from "../ReviewCreate/ReviewCreate";
import getUserInfoById from "../../../services/getUserInfoById";
import options from "../../../assets/icons/options.svg";
import update from "../../../assets/icons/update.svg";
import trash from "../../../assets/icons/delete.svg";
import getUserId from "../../../services/getUserId";
import AlertModal from "../../blocks/AlertModal/AlertModal";

interface ReviewInfo extends Omit<content, 'productImages'> {
  likey: number;
  createdAt: string;
  productImages: string[];
  nickname: string;
  userImage: string;
}

export default function ReviewDetail({ isLogin }: {isLogin: boolean}) {
  const param = useParams();
  const [ searchParams, setSearchParams ] = useSearchParams();
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
  const [ userId, setUserId ] = useState("");
  const [ isModal, setIsModal ] = useState(false);
  const [ alertModal, setAlertModal ] = useState(false);

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

  useEffect(() => {
    const checkLogin = async () => {
      if (isLogin) {
        const userId = await getUserId();
        setUserId(userId);
      };
    };

    checkLogin();
  }, [isLogin]);

  return (
    <ReviewDetailPage>
      <UserInfoWrapper>
        <UserInfoArea style={{"marginLeft": "15px"}}>
          <Profile className="" url={reviewInfo.userImage} onClick={()=>{}} />
          <UserName>{reviewInfo.nickname}</UserName>
          <WritedTime>{reviewInfo.createdAt}</WritedTime>
        </UserInfoArea>
        <Link to={`/posts/${searchParams.get("page")}`}><ListButton>목록</ListButton></Link>
      </UserInfoWrapper>
      <PostContent>
        <ReviewHeader>
          <ReviewTitle>{reviewInfo.reviewTitle}</ReviewTitle>
          { (isLogin && userId === reviewInfo.userId) && <OptionIcon category={options} onClick={ () => { setIsModal(!isModal) } } /> }
          {
            isModal && 
            <>
              <MiniModal>
                <Link to={`/posts/update/${param.pId}`}><ButtonTitle><UpdateIcon category={update} /><p style={{paddingTop: "3px"}}>수정</p></ButtonTitle></Link>
                <ButtonTitle onClick={() => setAlertModal(true)}><UpdateIcon category={trash} /><p style={{paddingTop: "3px"}}>삭제</p></ButtonTitle>
              </MiniModal>
              { alertModal && <AlertModal mode="deleteAlert" setAlertModal={setAlertModal} reviewId={param.pId} /> }
            </>
          }
        </ReviewHeader>
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