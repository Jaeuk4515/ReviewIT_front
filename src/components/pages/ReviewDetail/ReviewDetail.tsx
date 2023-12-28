import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Comment from "../../atoms/Comment/Comment";
import Likey from "../../atoms/Likey/Likey";
import CommentForm from "../../blocks/CommentForm/CommentForm";
import CommentItem from "../../blocks/CommentItem/CommentItem";
import { Profile, UserInfoArea, UserName, WritedTime } from "../../blocks/CommentItem/CommentItem.styles";
import ReviewCard from "../../blocks/ReviewCard/ReviewCard";
import { ReviewDetailPage, UserInfoWrapper, ListButton, PostContent, ReviewHeader, ReviewTitle, OptionIcon, MiniModal, ButtonTitle, UpdateIcon, DeleteIcon, ContentText, ExtraInfoWrapper, LikeyButton, LikeyIcon, ExtraInfo, CommentArea } from "./ReviewDetail.styles";
import { useEffect, useState } from "react";
import axios from "axios";
import getUserInfoById from "../../../services/getUserInfoById";
import AlertModal from "../../blocks/Modal/AlertModal/AlertModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/RootState";
import gray_heart from "../../../assets/icons/gray_heart.svg";
import red_heart from "../../../assets/icons/red_heart.svg";
import { setLikey, setReviewInfo } from "../../../store/slices/reviewInfoSlice";
import RequireLoginModal from "../../blocks/Modal/RequireLoginModal/RequireLoginModal";
import user_default from "../../../assets/icons/user_default.svg";
import { ModalBg } from "../../blocks/Modal/AuthModal/AuthModal.styles";
import { origin_URL } from "../../../App";

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
  const { theme } = useSelector((state: RootState) => state.theme);
  const location = useLocation();

  useEffect(() => {
    const getReviewInfo = async () => {
      try {
        const response = await axios.get(`${origin_URL}/review/${param.pId}`);
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
      const response = await axios.get(`${origin_URL}/comment/${param.pId}`);
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
    const response = await axios.post(`${origin_URL}/review/likey/${param.pId}/${user._id}`);
    dispatch(setLikey(response.data));
  };

  useEffect(() => {
    if (user.likey.includes(param.pId!)) setIsLike(true);
    else setIsLike(false);
  }, [user.likey]);

  const checkCategory = () => {
    // 리뷰 상세 페이지에서 마이페이지로 이동 후 다시 뒤로가기로 리뷰 상세 페이지에 온 경우. 그냥 목록버튼을 누르면 category가 아래 세가지 중 하나여서 리뷰 목록이 안나옴. 이를 위해 목록버튼 클릭 시 category 필터링
    if (category === "내가 쓴 리뷰") return true;
    if (category === "좋아요 한 리뷰") return true;
    if (category === "내가 쓴 댓글") return true;
    return false;
  };

  return (
    <ReviewDetailPage>
      {isModal && <ModalBg style={{ background: "initial", backdropFilter: "initial", zIndex: "1500" }} onClick={() => { setIsModal(false) }} />}
      <UserInfoWrapper theme={theme}>
        <UserInfoArea style={{"marginLeft": "15px"}}>
          <Profile className="" url={reviewInfo.userImage} onClick={()=>{}} />
          <UserName>{reviewInfo.nickname}</UserName>
          <WritedTime>{reviewInfo.createdAt}</WritedTime>
        </UserInfoArea>
        <Link to={
          // 목록 버튼 클릭 시, 전체 리뷰 페이지에서 들어온 경우는 전체 리뷰 페이지로 보내고 강추/비추 페이지에서 들어온 경우는 강추/비추 페이지로 보냄
          !location.state?.recommend 
            ? `/posts?category=${checkCategory() ? "none" : category}&page=${pageInfo.page}&perPage=${pageInfo.perPage}&reset=no`
            : `/posts/recommendation/${location.state.recommend}?page=${pageInfo.page}&perPage=${pageInfo.perPage}`
          }><ListButton>목록</ListButton></Link>
      </UserInfoWrapper>
      <PostContent>
        <ReviewHeader>
          <ReviewTitle>{reviewInfo.reviewTitle}</ReviewTitle>
          {(login && user._id === reviewInfo.userId) && <OptionIcon onClick={ () => { setIsModal(!isModal) } } />}
          {
            isModal && 
            <>
              <MiniModal>
                <Link to={`/posts/update/${param.pId}`}><ButtonTitle><UpdateIcon /><p style={{paddingTop: "3px"}}>수정</p></ButtonTitle></Link>
                <ButtonTitle onClick={() => setAlertModal(true)}><DeleteIcon /><p style={{paddingTop: "3px"}}>삭제</p></ButtonTitle>
              </MiniModal>
              { alertModal && <AlertModal mode="deleteAlert" setAlertModal={setAlertModal} reviewId={param.pId} /> }
            </>
          }
        </ReviewHeader>
        <ReviewCard urls={reviewInfo.productImages} name={reviewInfo.productName} grade={reviewInfo.grade} link={reviewInfo.productLink} />
        <ContentText>{reviewInfo.reviewContent}</ContentText>
        <ExtraInfoWrapper theme={theme}>
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