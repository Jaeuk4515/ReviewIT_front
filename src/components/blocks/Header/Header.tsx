import { HeaderWrapper, HeaderArea, HeaderLogo, ButtonArea, HeaderButton, WriteReviewButton, WriteIcon, Profile } from "./Header.styles";
// import image from '../../../assets/icons/image.webp';
import { useEffect, useState } from "react";
import AuthModal from "../AuthModal/AuthModal";
import { useNavigate } from "react-router-dom";
import getUserInfo from "../../../services/getUserInfo";
import ProfileModal from "../ProfileModal/ProfileModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/RootState";
import { resetCategory } from "../../../store/slices/categorySlice";

export default function Header({ isLogin }: {isLogin: boolean}) {
  const [ modal, setModal ] = useState<"login" | "signup" | "">("");
  const [ userData, setUserData ] = useState({
    nickname: "",
    email: "",
    userImage: ""
  })
  const [ profileModal, setProfileModal ] = useState(false);
  const navigate = useNavigate();
  const { category } = useSelector((state: RootState) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogin) {
      const getData = async () => {
        const userInfo = await getUserInfo();
        setUserData({
          nickname: userInfo.nickname,
          email: userInfo.email,
          userImage: userInfo.userImage
        });
      };

      getData();
    }
  }, [isLogin]);

  const moveToHome = () => {
    // 리뷰 페이지의 카테고리가 클릭된 상태에서 홈 화면 이동시 카테고리 state 초기화 -> 안하면 홈 화면의 카테고리 버튼이 활성화 되어있음 
    if (category !== "none") dispatch(resetCategory());
    navigate("/");
  }

  return (
    <HeaderWrapper>
      <HeaderArea>
        <HeaderLogo onClick={moveToHome} />
        {
          !isLogin ? 
          <ButtonArea>
            <HeaderButton buttontype="login" onClick={() => { setModal("login") }}>로그인</HeaderButton>
            <HeaderButton buttontype="signup" onClick={() => { setModal("signup") }}>회원가입</HeaderButton>
            {modal && <AuthModal modalType={modal} state={modal} setState={setModal} />}
          </ButtonArea> : 
          <ButtonArea>
            <WriteReviewButton onClick={() => { navigate("/create") }}>
              <WriteIcon />
              리뷰작성
            </WriteReviewButton>
            <div style={{position: "relative"}}>
              <Profile className="" url={userData.userImage} onClick={() => { setProfileModal(!profileModal) }} />
              {profileModal && <ProfileModal userData={userData} setProfileModal={setProfileModal} />}
            </div>
          </ButtonArea>
        }
      </HeaderArea>
    </HeaderWrapper>
  )
}