import { HeaderWrapper, HeaderArea, HeaderLogo, ButtonArea, HeaderButton, WriteReviewButton, WriteIcon, Profile } from "./Header.styles";
import image from '../../../assets/icons/image.webp';
import { useState } from "react";
import AuthModal from "../AuthModal/AuthModal";

export default function Header({ isLogin }: {isLogin: boolean}) {
  const [ modal, setModal ] = useState<"login" | "signup" | "">("");

  const handleLogin = () => {
    setModal("login");
  }

  const handleSignup = () => {
    setModal("signup");
  }

  console.log("Header : " + modal);

  return (
    <HeaderWrapper>
      <HeaderArea>
        <HeaderLogo />
        {
          isLogin ? 
          <ButtonArea>
            <HeaderButton buttonType="login" onClick={handleLogin}>로그인</HeaderButton>
            <HeaderButton buttonType="signup" onClick={handleSignup}>회원가입</HeaderButton>
            {modal && <AuthModal modalType={modal} state={modal} setState={setModal} />}
          </ButtonArea> : 
          <ButtonArea>
            <WriteReviewButton>
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