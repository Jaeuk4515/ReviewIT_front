import { useNavigate } from "react-router-dom";
import { Logo, ModalBg, ModalButton, ModalTitle } from "../AuthModal/AuthModal.styles";
import { ButtonWrapper, LoginButton, ModalBox, SuccessMark, SuccessMessage, LoginText } from "./SuccessModal.styles";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../../../store/slices/modalSlice";
import { RootState } from "../../../../store/RootState";

interface SuccessModalType {
  mode: "signup" | "changepassword";
  setsuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SuccessModal({ mode, setsuccess }: SuccessModalType) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { theme } = useSelector((state: RootState) => state.theme);

  const handleClick = (buttonName: string) => {
    if (buttonName === "확인") {
      navigate("/");
      dispatch(setModal(""));
      return;
    };
    dispatch(setModal("login"));
    setsuccess(false);
    if (mode === "changepassword") {
      navigate("/");
    };
  };

  return (
    <ModalBg>
      <ModalBox>
        <Logo theme={theme} />
        <SuccessMessage>
          <SuccessMark />
          <ModalTitle>{mode === "signup" ? "회원 가입이 완료되었습니다!" : "비밀번호가 변경되었습니다!"}</ModalTitle>
        </SuccessMessage>
        <ButtonWrapper>
          <ModalButton onClick={() => handleClick("확인")}>확인</ModalButton>
          <LoginButton theme={theme} onClick={() => handleClick("로그인")}><LoginText>로그인</LoginText></LoginButton>
        </ButtonWrapper>
      </ModalBox>
    </ModalBg>
  )
}