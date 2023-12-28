import { HeaderWrapper, HeaderArea, HeaderLogo, ButtonArea, ThemeButton, ThemeIcon, LoginButton, RegisterButton, WriteReviewButton, WriteIcon, Profile } from "./Header.styles";
import { useEffect, useState } from "react";
import AuthModal from "../Modal/AuthModal/AuthModal";
import { useNavigate } from "react-router-dom";
import getUserInfo from "../../../services/getUserInfo";
import ProfileModal from "../Modal/ProfileModal/ProfileModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/RootState";
import { resetCategory, setCategory } from "../../../store/slices/categorySlice";
import { setUser } from "../../../store/slices/userSlice";
import { setModal } from "../../../store/slices/modalSlice";
import { ModalBg } from "../Modal/AuthModal/AuthModal.styles";
import { setTheme } from "../../../store/slices/themeSlice";
import Cookies from 'universal-cookie';

export default function Header() {
  const login = useSelector((state: RootState) => state.login);
  const { modal } = useSelector((state: RootState) => state.modal);
  const user = useSelector((state: RootState) => state.user);
  const [ profileModal, setProfileModal ] = useState(false);
  const navigate = useNavigate();
  const { category } = useSelector((state: RootState) => state.category);
  const dispatch = useDispatch();
  const reviewInfo = useSelector((state: RootState) => state.reviewInfo);
  const { theme } = useSelector((state: RootState) => state.theme);
  const [ isAnimating, setIsAnimating ] = useState(false);

  useEffect(() => {
    if (login) {
      const getData = async () => {
        const cookies = new Cookies();
        const jwtToken = cookies.get('token');
        console.log('Token before getUserInfo:', jwtToken)
        const response = await getUserInfo();
        console.log(response);
        if (!response) return;
        const { _id, nickname, email, userImage, likey } = response;
        dispatch(setUser({ _id, nickname, email, userImage, likey }));
      };

      getData();
    }
  }, [login, reviewInfo.likey]);

  const moveToHome = () => {
    // 리뷰 페이지의 카테고리가 클릭된 상태에서 홈 화면 이동시 카테고리 state 초기화 -> 안하면 홈 화면의 카테고리 버튼이 활성화 되어있음 
    if (category !== "none") dispatch(resetCategory());
    navigate("/");
  };

  const moveToCreate = () => {
    // 마이페이지에 있다가 리뷰 작성 페이지에서 리뷰 생성 후 목록 버튼 누르면 category가 "내가 쓴 리뷰" 인 상태여서 리뷰 목록이 안나옴 -> 이를 방지하기위해 리뷰 작성 페이지 진입 시 category를 none으로 변경 
    dispatch(setCategory("none"));
    navigate("/create");
  };

  const handleClick = () => {
    dispatch(setTheme(theme === "light" ? "dark" : "light"));
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 200);
  };

  return (
    <HeaderWrapper>
      {profileModal && <ModalBg style={{ background: "initial", backdropFilter: "initial", zIndex: "1500" }} onClick={() => { setProfileModal(!profileModal) }} />}
      <HeaderArea>
        <HeaderLogo theme={theme} onClick={moveToHome} />
        {
          !login ? 
          <ButtonArea>
            <ThemeButton theme={theme} animate={isAnimating ? "on" : "off"} onClick={handleClick}><ThemeIcon theme={theme} /></ThemeButton>
            <LoginButton colorTheme={theme} onClick={() => { dispatch(setModal("login")) }}>로그인</LoginButton>
            <RegisterButton onClick={() => { dispatch(setModal("signup")) }}>회원가입</RegisterButton>
            {modal && <AuthModal />}
          </ButtonArea> : 
          <ButtonArea>
            <ThemeButton theme={theme} animate={isAnimating ? "on" : "off"} onClick={handleClick}><ThemeIcon theme={theme} /></ThemeButton>
            <WriteReviewButton onClick={moveToCreate}>
              <WriteIcon />
              리뷰작성
            </WriteReviewButton>
            <div style={{position: "relative"}}>
              <Profile className="" url={user.userImage} onClick={() => { setProfileModal(!profileModal) }} />
              {profileModal && <ProfileModal userData={user} setProfileModal={setProfileModal} />}
            </div>
          </ButtonArea>
        }
      </HeaderArea>
    </HeaderWrapper>
  )
}