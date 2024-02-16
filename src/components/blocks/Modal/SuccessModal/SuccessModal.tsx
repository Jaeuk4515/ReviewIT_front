import { useNavigate } from "react-router-dom";
import { ModalBg } from "../AuthModal/AuthModal.styles";
import { ModalBox, ModalLogo, SuccessMark, SuccessText, SuccessMessage, ButtonWrapper, ConfirmButton, LoginButton, LoginText } from "./SuccessModal.styles";
import { useDispatch } from "react-redux";
import { setModal } from "../../../../store/slices/modalSlice";
import { useAppSelector } from "../../../../store/hooks";
import { selectTheme } from "../../../../store/slices/themeSlice";

interface SuccessModalType {
  mode: "signup" | "changepassword" | "changeuserinfo";
  setsuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SuccessModal({ mode, setsuccess }: SuccessModalType) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { theme } = useAppSelector(selectTheme);

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
        <ModalLogo logotheme={theme} />
        <SuccessMessage>
          <SuccessMark logotheme={theme} />
          <SuccessText>{getModalText()}</SuccessText>
        </SuccessMessage>
        <ButtonWrapper>
          <ConfirmButton onClick={() => handleClick("확인")}>확인</ConfirmButton>
          {mode !== "changeuserinfo" && <LoginButton buttontheme={theme} onClick={() => handleClick("로그인")}><LoginText>로그인</LoginText></LoginButton>}
        </ButtonWrapper>
      </ModalBox>
    </ModalBg>
  )
}