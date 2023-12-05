import { InputArea, InputBox, ModalTitle } from "../../blocks/AuthModal/AuthModal.styles";
import { ChangePasswordPage, PasswordForm, ButtonArea, Btn } from "./ChangePassword.styles";

export default function ChangePassword() {
  return (
    <ChangePasswordPage>
      <PasswordForm>
        <ModalTitle>비밀번호 변경</ModalTitle>
        <InputArea>
          <InputBox type="text" className="" color="#F0F0F0" width="330px" height="45px" placeholder="아이디를 입력하세요" name="" value="" onChange={()=>{}} />
          <InputBox type="password" className="" color="#F0F0F0" width="330px" height="45px" placeholder="새 비밀번호를 입력하세요" name="" value="" onChange={()=>{}} />
          <InputBox type="password" className="" color="#F0F0F0" width="330px" height="45px" placeholder="새 비밀번호 확인" name="" value="" onChange={()=>{}} />
        </InputArea>
        <ButtonArea>
          <Btn buttontype="cancel">취소</Btn>
          <Btn buttontype="write" type="submit">등록</Btn>
        </ButtonArea>
      </PasswordForm>
    </ChangePasswordPage>
  )
}