import { HeaderWrapper, HeaderArea, HeaderLogo, ButtonArea, HeaderButton, WriteReviewButton, WriteIcon, Profile } from "./Header.styles";
// import image from '../../../assets/icons/image.webp';
import { useEffect, useState } from "react";
import AuthModal from "../AuthModal/AuthModal";
import { Link, useNavigate } from "react-router-dom";
import getUserInfo from "../../../services/getUserInfo";
import ProfileModal from "../ProfileModal/ProfileModal";

export default function Header({ isLogin }: {isLogin: boolean}) {
  const [ modal, setModal ] = useState<"login" | "signup" | "">("");
  const [ userData, setUserData ] = useState({
    nickname: "",
    email: "",
    userImage: ""
  })
  const [ profileModal, setProfileModal ] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/create");
  }

  const handleLogin = () => {
    setModal("login");
  }

  const handleSignup = () => {
    setModal("signup");
  }

  const handleProfileModal = () => {
    setProfileModal(!profileModal);
  }

  console.log("header profileModal : ", profileModal);

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

  return (
    <HeaderWrapper>
      <HeaderArea>
        <Link to="/"><HeaderLogo /></Link>
        {
          !isLogin ? 
          <ButtonArea>
            <HeaderButton buttontype="login" onClick={handleLogin}>로그인</HeaderButton>
            <HeaderButton buttontype="signup" onClick={handleSignup}>회원가입</HeaderButton>
            {modal && <AuthModal modalType={modal} state={modal} setState={setModal} />}
          </ButtonArea> : 
          <ButtonArea>
            <WriteReviewButton onClick={handleClick}>
              <WriteIcon />
              리뷰작성
            </WriteReviewButton>
            <div style={{position: "relative"}}>
              <Profile className="" url={userData.userImage} onClick={handleProfileModal} />
              {profileModal && <ProfileModal userData={userData} setProfileModal={setProfileModal} />}
            </div>
          </ButtonArea>
        }
      </HeaderArea>
    </HeaderWrapper>
  )
}