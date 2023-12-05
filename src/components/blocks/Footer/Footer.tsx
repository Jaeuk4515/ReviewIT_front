import { FooterWrapper, FooterArea, IconArea, FooterLogo, ContactIconArea, ContactIcon, FooterTextArea, FooterText } from "./Footer.styles";
import facebook from "../../../assets/icons/facebook.svg";
import instagram from "../../../assets/icons/instagram.svg";
import youtube from "../../../assets/icons/youtube.svg";
import mail from "../../../assets/icons/mail.svg";

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterArea>
        <IconArea>
          <FooterLogo />
          <ContactIconArea>
            <ContactIcon icontype={facebook} />
            <ContactIcon icontype={instagram} />
            <ContactIcon icontype={youtube} />
            <ContactIcon icontype={mail} />
          </ContactIconArea>
        </IconArea>
        <FooterTextArea>
          <FooterText>상품명 : 리뷰모아</FooterText>
          <FooterText>사업자등록번호 : 123-45-6789 | 개인프로젝트 | 익스프레스 | 리액트 | 고유번호 : 123456</FooterText>
          <FooterText>주소 : 서울시 강남구 무슨무슨로 아무개빌딩 207호 (123456) | 고객센터 : abc123@gmail.com</FooterText>
          <FooterText>2023 (주) 개인회사   Inc. All rights reserved.</FooterText>
        </FooterTextArea>
      </FooterArea>
    </FooterWrapper>
  )
}