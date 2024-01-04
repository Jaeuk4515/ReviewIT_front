import { Logo, ModalBg, ModalButton } from "../AuthModal/AuthModal.styles";
import { ModalText } from "./RequireLoginModal.styles";
import { ModalBox } from "../SuccessModal/SuccessModal.styles";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/RootState";

export default function RequireLoginModal({ setLoginRequired }: {setLoginRequired: React.Dispatch<React.SetStateAction<boolean>>}) {
  const { theme } = useSelector((state: RootState) => state.theme);

  return (
    <ModalBg>
      <ModalBox style={{width: "420px", height: "320px", gap: '2.5rem'}}>
        <Logo logotheme={theme} />
        <ModalText>로그인이 필요한 서비스입니다!</ModalText>
        <ModalButton style={{width: "70%"}} onClick={() => { setLoginRequired(false) }}>확인</ModalButton>
      </ModalBox>
    </ModalBg>
  )
}