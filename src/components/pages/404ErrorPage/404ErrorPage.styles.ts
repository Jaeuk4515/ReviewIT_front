import styled from "styled-components";

const PageArea = styled.div`
  width: 100%;
  height: calc( 100vh - 380px );
  display: flex;
  justify-content: center;
  align-items: center;
`

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

const ErrorImage = styled.img`
  width: 300px;
  height: 300px;
`

const ErrorText = styled.span`
  color: #4370FF;
  font-size: 30px;
  margin-bottom: 25px;
`

export { PageArea, ContentWrapper, ErrorImage, ErrorText };