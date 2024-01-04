import { useNavigate } from "react-router-dom";
import { Logo, ModalBg, ModalButton, ModalTitle } from "../AuthModal/AuthModal.styles";
import { ButtonWrapper, LoginButton, ModalBox, SuccessMark, SuccessMessage, LoginText } from "./SuccessModal.styles";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../../../store/slices/modalSlice";
import { RootState } from "../../../../store/RootState";

interface SuccessModalType {
  mode: "signup" | "changepassword" | "changeuserinfo";
  setsuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SuccessModal({ mode, setsuccess }: SuccessModalType) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { theme } = useSelector((state: RootState) => state.theme);

  const handleClick = (buttonName: string) => {
    if (buttonName === "확인") {
      if (mode === "changeuserinfo") {
        setsuccess(false);
        return;
      }
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

  const getModalText = () => {
    let text = "";
    switch (mode) {
      case "signup":
        text = "회원 가입이 완료되었습니다!";
        break;
      case "changepassword":
        text = "비밀번호가 변경되었습니다!";
        break;
      case "changeuserinfo":
        text = "회원 정보가 수정되었습니다!";
        break;
    };
    return text;
  }

  return (
    <ModalBg>
      <ModalBox style={mode === "changeuserinfo" ? {height: "320px", gap: "1rem"} : {}}>
        <Logo logotheme={theme} />
        <SuccessMessage>
          <SuccessMark logotheme={theme} />
          <ModalTitle>{getModalText()}</ModalTitle>
        </SuccessMessage>
        <ButtonWrapper>
          <ModalButton onClick={() => handleClick("확인")}>확인</ModalButton>
          {mode !== "changeuserinfo" && <LoginButton theme={theme} onClick={() => handleClick("로그인")}><LoginText>로그인</LoginText></LoginButton>}
        </ButtonWrapper>
      </ModalBox>
    </ModalBg>
  )
}