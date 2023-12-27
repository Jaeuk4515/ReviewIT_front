import { Ballon, ButtonArea, MyPageButton, LogoutButton, InfoArea } from "./ProfileModal.styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/RootState";
import { setLogin } from "../../../../store/slices/loginSlice";

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
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const logout = async () => {
    const response = await axios.get("http://localhost:3001/user/logout", { withCredentials: true });
    if (response.data.message === "success") {
      dispatch(setLogin(false));
      setProfileModal(false);
    };
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