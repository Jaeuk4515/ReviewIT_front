import { useContext, useEffect } from "react";
import { Ballon, ButtonArea, MyPageButton, LogoutButton, InfoArea } from "./ProfileModal.styles";
import axios from "axios";
import { authContext } from "../../../App";

type UserData = {
  nickname: string;
  email: string;
  userImage: string;
}

interface ProfileModalType {
  userData: UserData;
  setProfileModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ProfileModal({ userData, setProfileModal }: ProfileModalType) {
  const { isLogin, setIsLogin } = useContext(authContext)!;

  const logout = async () => {
    const response = await axios.get("http://localhost:3001/user/logout", { withCredentials: true });
    if (response.data.message === "success") {
      setIsLogin(false);
      setProfileModal(false);
    }
  }
  return (
    <Ballon>
      <InfoArea>
        <h3>{userData.nickname}</h3>
        <h4>{userData.email}</h4>
      </InfoArea>
      <ButtonArea>
        <MyPageButton>마이페이지</MyPageButton>
        <LogoutButton onClick={logout}>로그아웃</LogoutButton>
      </ButtonArea>
    </Ballon>
  )
}