import { Logo, ModalBg, ModalButton, ModalTitle } from "../AuthModal/AuthModal.styles";
import { ModalBox } from "../SuccessModal/SuccessModal.styles";

export default function AlertModal({ setAlertModal }: {setAlertModal: React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <ModalBg>
      <ModalBox style={{width: "420px", height: "320px", gap: '2.5rem'}}>
        <Logo />
        <ModalTitle>모든 정보를 입력해주세요!</ModalTitle>
        <ModalButton onClick={() => {
          setAlertModal(false);
        }}>확인</ModalButton>
      </ModalBox>
    </ModalBg>
  )
}