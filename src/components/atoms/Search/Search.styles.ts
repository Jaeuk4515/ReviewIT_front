import styled from "styled-components";
import { InputBox } from "../Input/Input.styles";
import search from "../../../assets/icons/search.svg";
import { ReactComponent as X } from "../../../assets/icons/white_x.svg";

const SearchArea = styled.form<{width: string, height: string}>`
  position: relative;
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 30px;
`

const SearchBox = styled(InputBox)`
  border: 1px solid rgba(0, 0, 0, .15);
  border-radius: 30px;
  position: absolute;
  box-sizing: border-box;
  padding: 0 20px 0 20px;
  caret-color: #89CFF3;
  font-size: 20px;
  position: relative;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #D9D9D9;
  }
`

const CancelButton = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 10px;
  background-color: #B7B7B7;
  position: absolute;
  top: 14px; right: 80px;
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
  width: 14%;
  height: 100%;
  border-radius: 0 30px 30px 0;
  border: none;
  position: absolute;
  right: 0;
  background-color: #89CFF3;
  background-image: url(${search});
  background-repeat: no-repeat;
  background-size: 20px 20px;
  background-position: center;
  cursor: pointer;
`

export { SearchArea, SearchBox, CancelButton, XIcon, IconArea }