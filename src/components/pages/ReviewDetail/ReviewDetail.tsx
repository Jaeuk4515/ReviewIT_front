import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";
import Comment from "../../atoms/Comment/Comment";
import Likey from "../../atoms/Likey/Likey";
import CommentForm from "../../blocks/CommentForm/CommentForm";
import CommentItem, { CommentItemType } from "../../blocks/CommentItem/CommentItem";
import { Profile, UserInfoArea, UserName, WritedTime } from "../../blocks/CommentItem/CommentItem.styles";
import ReviewCard from "../../blocks/ReviewCard/ReviewCard";
import { ReviewDetailPage, UserInfoWrapper, ListButton, PostContent, ReviewHeader, ReviewTitle, OptionIcon, MiniModal, ButtonTitle, UpdateIcon, DeleteIcon, ContentText, ExtraInfoWrapper, LikeyButton, LikeyIcon, ExtraInfo, CommentArea } from "./ReviewDetail.styles";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { content } from "../ReviewCreate/ReviewCreate";
import getUserInfoById from "../../../services/getUserInfoById";
import options from "../../../assets/icons/options.svg";
import update from "../../../assets/icons/update.svg";
import trash from "../../../assets/icons/delete.svg";
import AlertModal from "../../blocks/Modal/AlertModal/AlertModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/RootState";
import gray_heart from "../../../assets/icons/gray_heart.svg";
import red_heart from "../../../assets/icons/red_heart.svg";
import { setLikey, setReviewInfo } from "../../../store/slices/reviewInfoSlice";
import RequireLoginModal from "../../blocks/Modal/RequireLoginModal/RequireLoginModal";

export default function ReviewDetail({ isLogin }: {isLogin: boolean}) {
  const param = useParams();
  const pageInfo = useSelector((state: RootState) => state.page);
  const { category } = useSelector((state: RootState) => state.category);
  const reviewInfo = useSelector((state: RootState) => state.reviewInfo);
  const dispatch = useDispatch();
  const [ isModal, setIsModal ] = useState(false);
  const [ alertModal, setAlertModal ] = useState(false);
  const user = useSelector((state: RootState) => state.user);
  const [ isLike, setIsLike ] = useState(false);
  const [ loginRequired, setLoginRequired ] = useState(false);

  useEffect(() => {
    const getReviewInfo = async () => {
      const response = await axios.get(`http://localhost:3001/review/${param.pId}`);
      const { nickname, userImage } = await getUserInfoById(response.data.userId);
      const date = new Date(response.data.createdAt);
      dispatch(setReviewInfo({
        ...response.data,
        createdAt: `${date.toLocaleDateString('ko-KR')} ${date.toLocaleTimeString('ko-KR')}`,
        nickname: nickname,
        userImage: userImage
      }));
    };

    getReviewInfo();
  }, []);

  useEffect(() => {
    const checkLogin = async () => {
      if (!isLogin) setIsLike(false);
    };

    checkLogin();
  }, [isLogin]);

  const handleLikeButtonClick = async () => {
    if (!isLogin) {
      setLoginRequired(true);
      return;
    }
    const response = await axios.post(`http://localhost:3001/review/likey/${param.pId}/${user._id}`);
    dispatch(setLikey(response.data));
  };

  useEffect(() => {
    if (user.likey.includes(param.pId!)) setIsLike(true);
    else setIsLike(false);
  }, [user.likey]);

  // console.log(reviewInfo, isLike);

  return (
    <ReviewDetailPage>
      <UserInfoWrapper>
        <UserInfoArea style={{"marginLeft": "15px"}}>
          <Profile className="" url={reviewInfo.userImage} onClick={()=>{}} />
          <UserName>{reviewInfo.nickname}</UserName>
          <WritedTime>{reviewInfo.createdAt}</WritedTime>
        </UserInfoArea>
        <Link to={`/posts?category=${category}&page=${pageInfo.page}&perPage=${pageInfo.perPage}&reset=no`}><ListButton>목록</ListButton></Link>
      </UserInfoWrapper>
      <PostContent>
        <ReviewHeader>
          <ReviewTitle>{reviewInfo.reviewTitle}</ReviewTitle>
          { (isLogin && user._id === reviewInfo.userId) && <OptionIcon category={options} onClick={ () => { setIsModal(!isModal) } } /> }
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
          <LikeyButton onClick={handleLikeButtonClick}><LikeyIcon category={isLike ? red_heart : gray_heart} /></LikeyButton>
          {loginRequired && <RequireLoginModal setLoginRequired={setLoginRequired} />}
          <ExtraInfo>
            <Comment amount={0} />
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