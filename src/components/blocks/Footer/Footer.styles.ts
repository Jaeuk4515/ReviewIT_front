import styled from "styled-components";
import { HeaderArea, HeaderLogo, HeaderWrapper } from "../Header/Header.styles";
import { Logo } from "../Modal/AuthModal/AuthModal.styles";


const FooterWrapper = styled(HeaderWrapper)`
  height: 200px;
  border-bottom: 0;
  border-top: 1px solid rgba(0, 0, 0, .05);
  background-color: ${({ theme }) => theme.footerColor};
  z-index: 10;
`

const FooterArea = styled(HeaderArea)`
  height: 80px;
`

const IconArea = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const FooterLogo = styled(HeaderLogo)<{theme: "login" | "dark"}>`

`

const ContactIconArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 170px;
`

const ContactIcon = styled.div<{icontype: string}>`
  background-image: url(${props => props.icontype});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 30px;
  height: 30px;
`

const FooterTextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 50%;
`

const FooterText = styled.span`
  color: ${({ theme }) => theme.footerText};
  font-size: 13px;
`

export { FooterWrapper, FooterArea, IconArea, FooterLogo, ContactIconArea, ContactIcon, FooterTextArea, FooterText }