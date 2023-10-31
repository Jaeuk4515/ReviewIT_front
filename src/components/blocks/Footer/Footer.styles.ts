import styled from "styled-components";
import { HeaderArea, HeaderLogo, HeaderWrapper } from "../Header/Header.styles";
import { Logo } from "../AuthModal/AuthModal.styles";


const FooterWrapper = styled(HeaderWrapper)`
  height: 150px;
`

const FooterArea = styled(HeaderArea)`
  height: 55%;
`

const IconArea = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const FooterLogo = styled(HeaderLogo)`

`

const ContactIconArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 170px;
`

const ContactIcon = styled(Logo)<{iconType: string}>`
  background-image: url(${props => props.iconType});
  width: 30px;
  height: 30px;
`

const FooterTextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 60%;
`

const FooterText = styled.span`
  color: #9A9A9A;
  font-size: 13px;
`

export { FooterWrapper, FooterArea, IconArea, FooterLogo, ContactIconArea, ContactIcon, FooterTextArea, FooterText }