import { MyPageArea, InfoArea, ProfileUpdateCard, UserImage, UserImageCover, InputAndButtonArea, ButtonArea, UpdateButton, DeleteIdButton, SlimDivider, UserReviewArea, ReviewOptionArea, InitButton, CommentCard } from "./MyPage.styles"
import { FileBox, ImageInput, ImageUploadButton, InputArea } from "../ReviewCreate/ReviewCreate.styles";
import Input from "../../atoms/Input/Input";
import Category from "../../atoms/Category/Category";
import UserReviewInfo from "../../blocks/UserReviewInfo/UserReviewInfo";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/RootState";
import { useEffect, useState } from "react";
import { resetCategory, setCategory } from "../../../store/slices/categorySlice";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { PostObject } from "../../../store/slices/postInfoSlice";
import { resetPage } from "../../../store/slices/pageSlice";
import { setNickname, setUserImage } from "../../../store/slices/userSlice";
import user_default from "../../../assets/icons/user_default.svg";
import { CommentText, Profile, UserInfoArea, UserName, WritedTime } from "../../blocks/CommentItem/CommentItem.styles";
import AlertModal from "../../blocks/Modal/AlertModal/AlertModal";

interface ReviewInfo extends PostObject {
  reviewTitle: string;
  createdAt: string;
}

interface CommentInfo {
  reviewId: string;
  text: string;
  createdAt: string;
}

interface UserInfo {
  userImage: File | null;
  nickname: string;
}

export default function MyPage({ isLogin }: {isLogin: boolean}) {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const [ isUserImageHover, setIsUserImageHover ] = useState(false);
  const category = useSelector((state: RootState) => state.category);
  const param = useParams();
  const [ reviewInfo, setReviewInfo ] = useState<ReviewInfo[]>([]);
  const [ commentInfo, setCommentInfo ] = useState<CommentInfo[]>([]);
  const navigate = useNavigate();
  const [ userInfo, setUserInfo ] = useState<UserInfo>({
    userImage: null,
    nickname: user.nickname
  });
  const [ showImage, setShowImage ] = useState("");
  const [ deleteModal, setDeleteModal ] = useState(false);

  // 왜 로그인중인데도 새로고침하면 튕기냐 -> 리뷰 생성 페이지에서 로그인중인데 새로고침하면 튕기는거랑 똑같은듯. 새로고침하면 isLogin이 false로 되는거같은데.. ㅅㅂ 
  useEffect(() => {
    if (!isLogin) navigate("/");
  }, [isLogin]);

  useEffect(() => {
    dispatch(setCategory("내가 쓴 리뷰"));
  }, []);

  useEffect(() => {
    // userId가 현재 user의 id인 리뷰들 가져오는 api 호출 
    const getMyReviews = async () => {
      if (category.category === "내가 쓴 리뷰") {
        const response = await axios.get(`http://localhost:3001/review/myReviews/${param.userId}?category=write_review`);
        setReviewInfo(response.data);
        setCommentInfo([]);
      };
      if (category.category === "좋아요 한 리뷰") {
        const response = await axios.get(`http://localhost:3001/review/myReviews/${param.userId}?category=like_review`);
        setReviewInfo(response.data);
        setCommentInfo([]);
      };
      if (category.category === "내가 쓴 댓글") {
        const response = await axios.get(`http://localhost:3001/review/myReviews/${param.userId}?category=write_comment`);
        setReviewInfo([]);
        setCommentInfo(response.data);
      };
    };

    getMyReviews();
  }, [category]);

  const imagePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imgFile = e.target.files && e.target.files[0];
    setUserInfo({
      ...userInfo,
      userImage: imgFile
    });
    setShowImage(URL.createObjectURL(imgFile!));
  };

  const changeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      nickname: e.target.value
    });
  };

  // 유저가 새로 입력한 프사, 닉네임 서버로 보내서 서버에서 db정보 업데이트 한 후 응답으로 user 객체 보냄. 그걸로 user state 업데이트 해줘서 마이페이지 화면 및 헤더에 바로 반영하기 
  const handleSubmit = async () => {
    const formData = new FormData();
    if (userInfo.userImage) formData.append('userImage', userInfo.userImage);
    formData.append('nickname', userInfo.nickname);
    const isDefault = showImage === user_default;  // 유저 이미지를 기본 이미지로 바꿨을 경우 
    const response = await axios.patch(`http://localhost:3001/user/update/${param.userId}?default=${isDefault ? "yes" : "no"}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const { nickname, userImage } = response.data;
    dispatch(setNickname(nickname));
    dispatch(setUserImage(userImage));
    setUserInfo({
      userImage: null,
      nickname: nickname
    });
    setShowImage("");
  };

  const changeDefaultImage = () => {
    setShowImage(user_default);
    setUserInfo({
      ...userInfo,
      userImage: null
    });
  };

  const moveToReviewDetail = (reviewId: string) => {
    navigate(`/posts/detail/${reviewId}`);
    // 마이페이지에서 리뷰 상세 페이지로 진입 시에는 category, page 정보 초기화 (리뷰 상세 페이지에서 목록 버튼 누르는 경우를 위해)
    dispatch(resetCategory());
    dispatch(resetPage());
  };

  const deleteAccount = () => {
    setDeleteModal(true);
  }

  return (
    <MyPageArea>
      <InfoArea>
        <ProfileUpdateCard>
          <UserImage category={showImage || user.userImage} onMouseEnter={() => setIsUserImageHover(true)} onMouseLeave={() => setIsUserImageHover(false)}>
            {isUserImageHover && 
              <UserImageCover>
                <FileBox style={{flexDirection: "column", gap: ".5rem"}}>
                  <ImageUploadButton htmlFor="img_file">이미지 변경</ImageUploadButton>
                  <ImageInput type="file" id="img_file" accept="image/*" onChange={imagePreview} />
                  <InitButton onClick={changeDefaultImage}>기본 이미지로</InitButton>
                </FileBox>
              </UserImageCover>}
          </UserImage>
          <InputAndButtonArea>
            <InputArea style={{gap: ".7rem", width: "100%"}}>
              <h3>닉네임</h3>
              <Input type="text" className="" color="white" width="100%" height="40px" name="nickname" value={userInfo.nickname} onChange={changeNickname} />
            </InputArea>
            <ButtonArea>
              <UpdateButton onClick={handleSubmit}><span style={{color: "white", fontWeight: "bold", fontSize: "17px"}}>저장</span></UpdateButton>
              <DeleteIdButton onClick={deleteAccount}><span style={{color: "white", fontWeight: "bold", fontSize: "17px"}}>회원 탈퇴</span></DeleteIdButton>
              {deleteModal && <AlertModal mode="deleteAccountAlert" setAlertModal={setDeleteModal} />}
            </ButtonArea>
          </InputAndButtonArea>
        </ProfileUpdateCard>
        <SlimDivider className="" width="80%" minWidth="700px" />
        <UserReviewArea>
          <ReviewOptionArea>
            <Category categoryName="내가 쓴 리뷰" nameLeftPadding="0px" onClick={() => { dispatch(setCategory("내가 쓴 리뷰")) }} width="175px" />
            <Category categoryName="좋아요 한 리뷰" nameLeftPadding="0px" onClick={() => { dispatch(setCategory("좋아요 한 리뷰")) }} width="195px" />
            <Category categoryName="내가 쓴 댓글" nameLeftPadding="0px" onClick={() => { dispatch(setCategory("내가 쓴 댓글")) }} width="175px" />
          </ReviewOptionArea>
          {reviewInfo.map(({ reviewId, productImage, reviewTitle, productName, grade, createdAt }) => (
            <UserReviewInfo key={reviewId} productImage={productImage} reviewTitle={reviewTitle} productName={productName} grade={grade} createdAt={createdAt} onClick={() => moveToReviewDetail(reviewId)} />
          ))}
          {commentInfo.map(({ reviewId, text, createdAt }) => (
            <CommentCard onClick={() => moveToReviewDetail(reviewId)}>
              <UserInfoArea>
                <Profile className="" url={user.userImage} onClick={()=>{}} />
                <UserName>{user.nickname}</UserName>
                <WritedTime>{createdAt}</WritedTime>
              </UserInfoArea>
              <CommentText>{text}</CommentText>
            </CommentCard>
          ))}
        </UserReviewArea>
      </InfoArea>
    </MyPageArea>
  )
}