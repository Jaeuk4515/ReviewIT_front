import styled from "styled-components";
import Button from "../../../atoms/Button/Button";

const Ballon = styled.div`
  width: 240px;
  height: 160px;
  position: absolute;
  top: 60px;
  right: -27px;
  background-color: ${({ theme }) => theme.backgroundColor};
  z-index: 1800;
  border-radius: 15px;
  box-shadow: 0 2px 4px 0 rgba(33, 37, 41, .24);
  border: 1px solid #E0E0E0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  &::before {
    content: "";
    width: 17px;
    height: 17px;
    background-color: ${({ theme }) => theme.backgroundColor};
    transform: rotate(34.5deg) skew(0, 20deg);
    position: absolute;
    top: -9.5px; right: 36px;
    border-radius: 2px;
    border: 1px solid #E0E0E0;
    border-right: none;
    border-bottom: none;

    @media ${({ theme }) => theme.mediaQuery.small} {
      right: 25px;
    }
  };

  @media ${({ theme }) => theme.mediaQuery.small} {
    width: 200px;
    height: 145px;
    right: -16px;
  };
`

const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .4rem;
`

const ButtonArea = styled.div`
  display: flex;
`

const MyPageButton = styled(Button)`
  background-color: #364F6B;
  width: 95px;
  height: 40px;
  border-radius: 10px 0 0 10px;
  color: white;
  font-size: 17px;
  font-weight: bold;
  border: none;

  @media ${({ theme }) => theme.mediaQuery.small} {
    width: 80px;
    font-size: 14px;
  };
`

const LogoutButton = styled(MyPageButton)`
  background-color: white;
  border-radius: 0 10px 10px 0;
  color: black;
  border: 1px solid #E0E0E0;
`

export { Ballon, InfoArea, ButtonArea, MyPageButton, LogoutButton }