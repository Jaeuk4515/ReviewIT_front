import { Ballon, ButtonArea, MyPageButton, LogoutButton, InfoArea } from "./ProfileModal.styles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../../../store/slices/loginSlice";
import { cookies } from "../../../../App";
import { resetUser, selectUser } from "../../../../store/slices/userSlice";
import { useAppSelector } from "../../../../store/hooks";

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
  const navigate = useNavigate();
  const user = useAppSelector(selectUser);
  const dispatch = useDispatch();

  const logout = async () => {
    cookies.remove('token', { path: '/' });
    dispatch(resetUser());
    dispatch(setLogin(false));
    setProfileModal(false);
  };

  const moveToMyPage = () => {
    navigate(`/mypage/${user._id}?category=write_review`);
    setProfileModal(false);
  };

  return (
    <Ballon>
      <InfoArea>
        <h3>{userData.nickname}</h3>
        <h4>{userData.email}</h4>
      </InfoArea>
      <ButtonArea>
        <MyPageButton onClick={moveToMyPage}>마이페이지</MyPageButton>
        <LogoutButton onClick={logout}>로그아웃</LogoutButton>
      </ButtonArea>
    </Ballon>
  )
}