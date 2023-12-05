import { Logo, ModalBg, ModalButton } from "../AuthModal/AuthModal.styles";
import { ModalBox } from "../SuccessModal/SuccessModal.styles";
import { ModalText, AlertIcon } from "./AlertModal.styles";
import alert from "../../../assets/icons/alert.svg";
import { ButtonArea } from "../Header/Header.styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/RootState";

interface AlertModalType {
  mode: "createAlert" | "deleteAlert";
  setAlertModal: React.Dispatch<React.SetStateAction<boolean>>;
  reviewId?: string | undefined;
}

export default function AlertModal({ mode, setAlertModal, reviewId }: AlertModalType) {
  const navigate = useNavigate();
  const pageInfo = useSelector((state: RootState) => state.page);

  const handleDelete = async () => {
    const response = await axios.delete(`http://localhost:3001/review/delete/${reviewId}`);
    if (response.data.message === "success") {
      navigate(`/posts?page=${pageInfo.page}&perPage=${pageInfo.perPage}`);
    };
  };

  return (
    <ModalBg>
      <ModalBox style={{width: "420px", height: "320px", gap: '2.5rem'}}>
        <Logo />
        <ModalText><AlertIcon category={alert} />{mode === "createAlert" ? "모든 정보를 입력해주세요!" : "리뷰를 삭제하시겠습니까?"}</ModalText>
        {
          mode === "createAlert" ?
          <ModalButton style={{width: "70%"}} onClick={() => { setAlertModal(false) }}>확인</ModalButton> :
          <ButtonArea style={{width: "80%"}}>
            <ModalButton style={{width: "45%"}} onClick={ handleDelete }>확인</ModalButton>
            <ModalButton style={{backgroundColor: "white", color: "black", width: "45%", border: "1px solid rgba(0, 0, 0, .2)"}} onClick={() => { setAlertModal(false) }}>취소</ModalButton>
          </ButtonArea>
        }
      </ModalBox>
    </ModalBg>
  )
}