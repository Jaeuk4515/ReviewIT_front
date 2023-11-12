import { HeaderWrapper, HeaderArea, HeaderLogo, ButtonArea, HeaderButton, WriteReviewButton, WriteIcon, Profile } from "./Header.styles";
import image from '../../../assets/icons/image.webp';
import { useState } from "react";
import AuthModal from "../AuthModal/AuthModal";
import { Link, useNavigate } from "react-router-dom";

export default function Header({ isLogin }: {isLogin: boolean}) {
  const [ modal, setModal ] = useState<"login" | "signup" | "">("");
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
            <Profile className="" url={image} />
          </ButtonArea>
        }
      </HeaderArea>
    </HeaderWrapper>
  )
}