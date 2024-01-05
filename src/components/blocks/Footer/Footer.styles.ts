import styled from "styled-components";
import { HeaderArea, HeaderLogo, HeaderWrapper } from "../Header/Header.styles";


const FooterWrapper = styled(HeaderWrapper)`
  height: 200px;
  border-bottom: 0;
  border-top: 1px solid rgba(0, 0, 0, .05);
  background-color: ${({ theme }) => theme.footerColor};
  z-index: 10;

  @media ${({ theme }) => theme.mediaQuery.small} {
    align-items: flex-start;
  };
`

const FooterArea = styled(HeaderArea)`
  height: 80px;

  @media ${({ theme }) => theme.mediaQuery.small} {
    flex-direction: column;
    gap: 1.3rem;
    margin-top: 24px;
  };
`

const IconArea = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media ${({ theme }) => theme.mediaQuery.small} {
    height: 60px;
  };
`

const FooterLogo = styled(HeaderLogo)<{theme: "login" | "dark"}>`

`

const ContactIconArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 170px;

  @media ${({ theme }) => theme.mediaQuery.small} {
    width: 130px;
  };
`

const ContactIcon = styled.div<{icontype: string}>`
  background-image: url(${props => props.icontype});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 30px;
  height: 30px;

  @media ${({ theme }) => theme.mediaQuery.small} {
    width: 22px;
    height: 22px;
  }
`

const FooterTextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 50%;

  @media ${({ theme }) => theme.mediaQuery.small} {
    width: 80%;
    align-items: center;
  };
`

const FooterText = styled.span`
  color: ${({ theme }) => theme.footerText};
  font-size: 13px;

  @media screen and (max-width: 800px) {
    font-size: 11px;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    font-size: 10px;
  };
`

export { FooterWrapper, FooterArea, IconArea, FooterLogo, ContactIconArea, ContactIcon, FooterTextArea, FooterText }