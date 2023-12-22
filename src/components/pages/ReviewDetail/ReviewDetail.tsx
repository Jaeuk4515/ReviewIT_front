import { Link, useNavigate, useParams } from "react-router-dom";
import Comment from "../../atoms/Comment/Comment";
import Likey from "../../atoms/Likey/Likey";
import CommentForm from "../../blocks/CommentForm/CommentForm";
import CommentItem from "../../blocks/CommentItem/CommentItem";
import { Profile, UserInfoArea, UserName, WritedTime } from "../../blocks/CommentItem/CommentItem.styles";
import ReviewCard from "../../blocks/ReviewCard/ReviewCard";
import { ReviewDetailPage, UserInfoWrapper, ListButton, PostContent, ReviewHeader, ReviewTitle, OptionIcon, MiniModal, ButtonTitle, UpdateIcon, ContentText, ExtraInfoWrapper, LikeyButton, LikeyIcon, ExtraInfo, CommentArea } from "./ReviewDetail.styles";
import { useEffect, useState } from "react";
import axios from "axios";
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
import user_default from "../../../assets/icons/user_default.svg";
import { ModalBg } from "../../blocks/Modal/AuthModal/AuthModal.styles";

export interface CommentInfo {
  commentId: string;
  userId: string;
  text: string;
  createdAt: string;
};

export default function ReviewDetail() {
  const param = useParams();
  const login = useSelector((state: RootState) => state.login);
  const pageInfo = useSelector((state: RootState) => state.page);
  const { category } = useSelector((state: RootState) => state.category);
  const reviewInfo = useSelector((state: RootState) => state.reviewInfo);
  const dispatch = useDispatch();
  const [ isModal, setIsModal ] = useState(false);
  const [ alertModal, setAlertModal ] = useState(false);
  const user = useSelector((state: RootState) => state.user);
  const [ isLike, setIsLike ] = useState(false);
  const [ loginRequired, setLoginRequired ] = useState(false);
  const [ commentInfo, setCommentInfo ] = useState<CommentInfo[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getReviewInfo = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/review/${param.pId}`);
        const { nickname, userImage } = await getUserInfoById(response.data.userId);
        const date = new Date(response.data.createdAt);
        dispatch(setReviewInfo({
          ...response.data,
          createdAt: `${date.toLocaleDateString('ko-KR')} ${date.toLocaleTimeString('ko-KR')}`,
          nickname: nickname,
          userImage: userImage
        }));
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response?.data.message === "internal error") {
            navigate("/error/not_found");
          };
        };
      };
    };

    const getCommentData = async () => {
      const response = await axios.get(`http://localhost:3001/comment/${param.pId}`);
      setCommentInfo(response.data);
    };

    getReviewInfo();
    getCommentData();
  }, []);

  useEffect(() => {
    const checkLogin = async () => {
      if (!login) setIsLike(false);
    };

    checkLogin();
  }, [login]);

  const handleLikeButtonClick = async () => {
    if (!login) {
      setLoginRequired(true);
      return;
    };
    const response = await axios.post(`http://localhost:3001/review/likey/${param.pId}/${user._id}`);
    dispatch(setLikey(response.data));
  };

  useEffect(() => {
    if (user.likey.includes(param.pId!)) setIsLike(true);
    else setIsLike(false);
  }, [user.likey]);

  return (
    <ReviewDetailPage>
      {isModal && <ModalBg style={{ background: "initial", backdropFilter: "initial", zIndex: "1500" }} onClick={() => { setIsModal(false) }} />}
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
          {(login && user._id === reviewInfo.userId) && <OptionIcon category={options} onClick={ () => { setIsModal(!isModal) } } />}
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
            <Comment amount={commentInfo.length} />
            <Likey amount={reviewInfo.likey} />
          </ExtraInfo>
        </ExtraInfoWrapper>
      </PostContent>
      <CommentForm url={!login ? user_default : user.userImage} uId={user._id} rId={param.pId!} commentInfo={commentInfo} setCommentInfo={setCommentInfo} />
      <CommentArea>
        {commentInfo.map(({ commentId, userId, text, createdAt }) => (
          <CommentItem cId={commentId} userId={userId} text={text} createdAt={createdAt} commentInfo={commentInfo} setCommentInfo={setCommentInfo} />
        ))}
      </CommentArea>
    </ReviewDetailPage>
  )
}