import styled from "styled-components";
import { InputBox } from "../Input/Input.styles";
import search from "../../../assets/icons/search.svg";
import { ReactComponent as X } from "../../../assets/icons/white_x.svg";

const SearchArea = styled.form<{width: string, height: string}>`
  position: relative;
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 30px;

  @media screen and (max-width: 700px) {
    width: 80%;
    max-width: 500px;
    min-width: 270px;
  };
`

const SearchBox = styled(InputBox)<{theme: "light" | "dark"}>`
  border: 1px solid rgba(0, 0, 0, .15);
  border-radius: 30px;
  position: absolute;
  box-sizing: border-box;
  padding: 0 20px 0 20px;
  caret-color: #89CFF3;
  font-size: 20px;
  position: relative;
  background-color: ${props => props.theme === "light" ? "white" : "#626265"};
  color: ${props => props.theme === "light" ? "black" : "white"};

  &:focus {
    outline: none;
  };

  &::placeholder {
    color: #D9D9D9;
  };

  @media screen and (max-width: 700px) {
    width: 100%;
  };
`

const CancelButton = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 10px;
  background-color: #B7B7B7;
  position: absolute;
  top: 14px; left: -35px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const XIcon = styled(X)`
  width: 9px;
  height: 9px;
`

const IconArea = styled.button`
  width: 12.5%;
  min-width: 50px;
  height: 100%;
  border-radius: 0 30px 30px 0;
  border: none;
  position: absolute;
  right: 0;
  background-color: ${({ theme }) => theme.searchIconBoxColor};
  background-image: url(${search});
  background-repeat: no-repeat;
  background-size: 24px 24px;
  background-position: center;
  cursor: pointer;
`

export { SearchArea, SearchBox, CancelButton, XIcon, IconArea }