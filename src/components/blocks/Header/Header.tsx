import { HeaderWrapper, HeaderArea, HeaderLogo, ButtonArea, HeaderButton, WriteReviewButton, WriteIcon, Profile } from "./Header.styles";
import image from '../../../assets/icons/image.webp';

export default function Header({ isLogin }: {isLogin: boolean}) {
  return (
    <HeaderWrapper>
      <HeaderArea>
        <HeaderLogo />
        {
          isLogin ? 
          <ButtonArea>
            <HeaderButton buttonType="login">로그인</HeaderButton>
            <HeaderButton buttonType="signup">회원가입</HeaderButton>
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