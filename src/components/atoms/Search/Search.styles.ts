import styled from "styled-components";
import { InputBox } from "../Input/Input.styles";
import search from "../../../assets/icons/search.svg";

const SearchArea = styled.div<{width: string, height: string}>`
  position: relative;
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 30px;
`

const SearchBox = styled(InputBox)`
  border-radius: 30px;
  position: absolute;
  box-sizing: border-box;
  padding: 0 20px 0 20px;
  caret-color: #89CFF3;
  font-size: 20px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #D9D9D9;
  }
`

const IconArea = styled.div`
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

export { SearchArea, SearchBox, IconArea }