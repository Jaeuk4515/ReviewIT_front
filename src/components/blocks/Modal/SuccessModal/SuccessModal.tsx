import { useNavigate } from "react-router-dom";
import { Logo, ModalBg, ModalButton, ModalTitle } from "../AuthModal/AuthModal.styles";
import { ButtonWrapper, LoginButton, ModalBox, SuccessMark, SuccessMessage } from "./SuccessModal.styles";

interface SuccessModalType {
  setmodal: React.Dispatch<React.SetStateAction<"login" | "signup">>;
  setmodaltype: (state: "" | "login" | "signup") => void;
  setsuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SuccessModal({ setmodal, setmodaltype, setsuccess }: SuccessModalType) {
  const navigate = useNavigate();

  const handleClick = (buttonName: string) => {
    if (buttonName === "확인") {
      navigate("/");
      setmodaltype("");
      return;
    }
    setmodal("login");
    setsuccess(false);
  }

  return (
    <ModalBg>
      <ModalBox>
        <Logo />
        <SuccessMessage>
          <SuccessMark />
          <ModalTitle>회원 가입이 완료되었습니다!</ModalTitle>
        </SuccessMessage>
        <ButtonWrapper>
          <ModalButton onClick={() => handleClick("확인")}>확인</ModalButton>
          <LoginButton onClick={() => handleClick("로그인")}><span style={{fontSize: "20px", fontWeight: "bold"}}>로그인</span></LoginButton>
        </ButtonWrapper>
      </ModalBox>
    </ModalBg>
  )
}