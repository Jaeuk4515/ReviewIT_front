import { PageArea, ContentWrapper, ErrorImage, ErrorText } from "./404ErrorPage.styles";
import PageNotFound from "../../../assets/icons/404page.png";

export default function ErrorPage() {
  return (
    <PageArea>
      <ContentWrapper>
        <ErrorImage src={PageNotFound} />
        <ErrorText>존재하지 않는 페이지입니다!</ErrorText>
      </ContentWrapper>
    </PageArea>
  )
}