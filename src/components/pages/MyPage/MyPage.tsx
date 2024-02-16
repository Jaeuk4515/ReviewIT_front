import { 
  MyPageArea, 
  InfoArea, 
  ProfileUpdateCard,
  UserInfoWrapper, 
  UserImage, 
  UserImageCover, 
  ButtonWrapper, 
  ImageChangeButton, 
  InputAndButtonArea, 
  FormArea, 
  InputTitle,
  InputBox, 
  ButtonArea, 
  UpdateButton, 
  DeleteIdButton, 
  SlimDivider, 
  UserReviewArea, 
  ReviewOptionArea, 
  InitButton, 
  CommentCard 
} from "./MyPage.styles"
import { ImageInput } from "../ReviewCreate/ReviewCreate.styles";
import Category from "../../atoms/Category/Category";
import UserReviewInfo from "../../blocks/UserReviewInfo/UserReviewInfo";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { resetCategory, selectCategory, setCategory } from "../../../store/slices/categorySlice";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Post } from "../../../store/slices/postInfoSlice";
import { resetPage } from "../../../store/slices/pageSlice";
import { selectUser, setNickname, setUserImage } from "../../../store/slices/userSlice";
import user_default from "../../../assets/icons/user_default.svg";
import { CommentText, Profile, UserInfoArea, UserName, WritedTime } from "../../blocks/CommentItem/CommentItem.styles";
import AlertModal from "../../blocks/Modal/AlertModal/AlertModal";
import { origin_URL } from "../../../App";
import SuccessModal from "../../blocks/Modal/SuccessModal/SuccessModal";
import { useAppSelector } from "../../../store/hooks";
import { selectLogin } from "../../../store/slices/loginSlice";
import { selectTheme } from "../../../store/slices/themeSlice";

interface ReviewInfo extends Post {
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

export default function MyPage() {
  const login = useAppSelector(selectLogin);
  const user = useAppSelector(selectUser);
  const dispatch = useDispatch();
  const [ isUserImageHover, setIsUserImageHover ] = useState(false);
  const category = useAppSelector(selectCategory);
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
  const { theme } = useAppSelector(selectTheme);
  const [ success, setSuccess ] = useState(false);

  useEffect(() => {
    if (!login) navigate("/");
  }, [login]);

  useEffect(() => {
    dispatch(setCategory("리뷰"));
  }, []);

  useEffect(() => {
    // userId가 현재 user의 id인 리뷰들 가져오는 api 호출 
    const getMyReviews = async () => {
      if (category.category === "리뷰") {
        const response = await axios.get(`${origin_URL}/review/myReviews/${param.userId}?category=write_review`);
        setReviewInfo(response.data);
        setCommentInfo([]);
      };
      if (category.category === "좋아요") {
        const response = await axios.get(`${origin_URL}/review/myReviews/${param.userId}?category=like_review`);
        setReviewInfo(response.data);
        setCommentInfo([]);
      };
      if (category.category === "댓글") {
        const response = await axios.get(`${origin_URL}/review/myReviews/${param.userId}?category=write_comment`);
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
    const response = await axios.patch(`${origin_URL}/user/update/${param.userId}?default=${isDefault ? "yes" : "no"}`, formData, {
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
    setSuccess(true);
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
          <UserInfoWrapper>
            <UserImage imagetheme={theme} category={showImage || user.userImage} onMouseEnter={() => setIsUserImageHover(true)} onMouseLeave={() => setIsUserImageHover(false)}>
              {isUserImageHover && 
                <UserImageCover>
                  <ButtonWrapper>
                    <ImageChangeButton htmlFor="img_file">이미지 변경</ImageChangeButton>
                    <ImageInput type="file" id="img_file" accept="image/*" onChange={imagePreview} />
                    <InitButton onClick={changeDefaultImage}>기본 이미지로</InitButton>
                  </ButtonWrapper>
                </UserImageCover>}
            </UserImage>
            <InputAndButtonArea>
              <FormArea>
                <InputTitle>닉네임</InputTitle>
                <InputBox type="text" className="" color={theme === "light" ? "white" : "#626265"} width="100%" height="40px" name="nickname" value={userInfo.nickname} onChange={changeNickname} />
              </FormArea>
              <ButtonArea>
                <UpdateButton onClick={handleSubmit}>저장</UpdateButton>
                {success && <SuccessModal mode="changeuserinfo" setsuccess={setSuccess} />}
                <DeleteIdButton onClick={deleteAccount}>회원 탈퇴</DeleteIdButton>
                {deleteModal && <AlertModal mode="deleteAccountAlert" setAlertModal={setDeleteModal} />}
              </ButtonArea>
            </InputAndButtonArea>
          </UserInfoWrapper>
        </ProfileUpdateCard>
        <SlimDivider linetheme={theme} className="" width="90%" minwidth="700px" />
        <UserReviewArea>
          <ReviewOptionArea>
            <Category categoryName="리뷰" nameLeftPadding="0px" onClick={() => { dispatch(setCategory("리뷰")) }} />
            <Category categoryName="좋아요" nameLeftPadding="0px" onClick={() => { dispatch(setCategory("좋아요")) }}/>
            <Category categoryName="댓글" nameLeftPadding="0px" onClick={() => { dispatch(setCategory("댓글")) }} />
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