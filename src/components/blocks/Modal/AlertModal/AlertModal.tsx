import { Logo, ModalBg, ModalButton } from "../AuthModal/AuthModal.styles";
import { ModalBox } from "../SuccessModal/SuccessModal.styles";
import { ModalText, AlertIcon } from "./AlertModal.styles";
import alert from "../../../../assets/icons/alert.svg";
import { ButtonArea } from "../../Header/Header.styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/RootState";
import { setLogin } from "../../../../store/slices/loginSlice";
import { cookies, origin_URL } from "../../../../App";
import { resetUser } from "../../../../store/slices/userSlice";

interface AlertModalType {
  mode: "createAlert" | "deleteAlert" | "deleteAccountAlert";
  setAlertModal: React.Dispatch<React.SetStateAction<boolean>>;
  reviewId?: string | undefined;
}

export default function AlertModal({ mode, setAlertModal, reviewId }: AlertModalType) {
  const navigate = useNavigate();
  const pageInfo = useSelector((state: RootState) => state.page);
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const { theme } = useSelector((state: RootState) => state.theme);

  const handleDelete = async () => {
    if (mode === "deleteAlert") {
      const response = await axios.delete(`${origin_URL}/review/delete/${reviewId}`);
      if (response.data.message === "success") {
        navigate(`/posts?category=none&page=${pageInfo.page}&perPage=${pageInfo.perPage}`);
      };
    };
    if (mode === "deleteAccountAlert") {
      const response = await axios.delete(`${origin_URL}/user/delete/${user._id}`, { withCredentials: true });
      if (response.data.message === "success") {
        cookies.remove('token', { path: '/' });
        dispatch(resetUser());
        dispatch(setLogin(false));
        navigate("/");
      };
    };
  };

  const getModalText = () => {
    let text = "";
    switch (mode) {
      case "createAlert":
        text = "모든 정보를 입력해주세요!";
        break;
      case "deleteAlert":
        text = "리뷰를 삭제하시겠습니까?";
        break;
      case "deleteAccountAlert":
        text = "회원을 탈퇴하시겠습니까?";
        break;
    };
    return text;
  };

  return (
    <ModalBg>
      <ModalBox style={{width: "420px", height: "320px", gap: '2.5rem'}}>
        <Logo logotheme={theme} />
        <ModalText><AlertIcon category={alert} />{getModalText()}</ModalText>
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