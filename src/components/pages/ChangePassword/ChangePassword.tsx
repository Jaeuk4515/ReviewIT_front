import { InputArea, InputBox, ModalTitle } from "../../blocks/AuthModal/AuthModal.styles";
import { ChangePasswordPage, PasswordForm, ButtonArea, Btn } from "./ChangePassword.styles";

export default function ChangePassword() {
  return (
    <ChangePasswordPage>
      <PasswordForm>
        <ModalTitle>비밀번호 변경</ModalTitle>
        <InputArea>
          <InputBox className="" color="#F0F0F0" width="330px" height="45px" placeholder="아이디를 입력하세요" />
          <InputBox className="" color="#F0F0F0" width="330px" height="45px" placeholder="새 비밀번호를 입력하세요" />
          <InputBox className="" color="#F0F0F0" width="330px" height="45px" placeholder="새 비밀번호 확인" />
        </InputArea>
        <ButtonArea>
          <Btn buttonType="cancel">취소</Btn>
          <Btn buttonType="write" type="submit">등록</Btn>
        </ButtonArea>
      </PasswordForm>
    </ChangePasswordPage>
  )
}