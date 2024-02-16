import { ModalBg } from "../AuthModal/AuthModal.styles";
import { ConfirmButton, ModalLogo, SuccessMessage, SuccessText } from "../SuccessModal/SuccessModal.styles";
import { NewModalBox, AlertIcon } from "./RequireLoginModal.styles";
import { useAppSelector } from "../../../../store/hooks";
import { selectTheme } from "../../../../store/slices/themeSlice";

export default function RequireLoginModal({ setLoginRequired }: {setLoginRequired: React.Dispatch<React.SetStateAction<boolean>>}) {
  const { theme } = useAppSelector(selectTheme);

  return (
    <ModalBg>
      <NewModalBox>
        <ModalLogo logotheme={theme} />
        <SuccessMessage>
          <AlertIcon logotheme={theme} />
          <SuccessText>로그인이 필요한 서비스입니다!</SuccessText>
        </SuccessMessage>
        <ConfirmButton style={{width: "70%"}} onClick={() => { setLoginRequired(false) }}>확인</ConfirmButton>
      </NewModalBox>
    </ModalBg>
  )
}