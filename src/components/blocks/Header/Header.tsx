import { HeaderWrapper, HeaderArea, HeaderLogo, ButtonArea, ThemeButton, ThemeIcon, LoginButton, RegisterButton, WriteReviewButton, WriteIcon, Profile } from "./Header.styles";
import { useEffect, useState } from "react";
import AuthModal from "../Modal/AuthModal/AuthModal";
import { useNavigate } from "react-router-dom";
import getUserInfo from "../../../services/getUserInfo";
import ProfileModal from "../Modal/ProfileModal/ProfileModal";
import { resetCategory, selectCategory, setCategory } from "../../../store/slices/categorySlice";
import { selectUser, setUser } from "../../../store/slices/userSlice";
import { selectModal, setModal } from "../../../store/slices/modalSlice";
import { ModalBg } from "../Modal/AuthModal/AuthModal.styles";
import { selectTheme, setTheme } from "../../../store/slices/themeSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { selectLogin } from "../../../store/slices/loginSlice";
import { selectReviewInfo } from "../../../store/slices/reviewInfoSlice";

export default function Header() {
  const login = useAppSelector(selectLogin);
  const { modal } = useAppSelector(selectModal);
  const user = useAppSelector(selectUser);
  const [ profileModal, setProfileModal ] = useState(false);
  const navigate = useNavigate();
  const { category } = useAppSelector(selectCategory, () => { return true });
  const dispatch = useAppDispatch();
  const reviewInfo = useAppSelector(selectReviewInfo);
  const { theme } = useAppSelector(selectTheme);
  const [ isAnimating, setIsAnimating ] = useState(false);

  useEffect(() => {
    if (login) {
      const getData = async () => {
        const response = await getUserInfo();
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
        <HeaderLogo logotheme={theme} onClick={moveToHome} />
        {
          !login ? 
          <ButtonArea>
            <ThemeButton buttontheme={theme} animate={isAnimating ? "on" : "off"} onClick={handleClick}><ThemeIcon theme={theme} /></ThemeButton>
            <LoginButton colortheme={theme} onClick={() => { dispatch(setModal("login")) }}>로그인</LoginButton>
            <RegisterButton onClick={() => { dispatch(setModal("signup")) }}>회원가입</RegisterButton>
            {modal && <AuthModal />}
          </ButtonArea> : 
          <ButtonArea>
            <ThemeButton buttontheme={theme} animate={isAnimating ? "on" : "off"} onClick={handleClick}><ThemeIcon theme={theme} /></ThemeButton>
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