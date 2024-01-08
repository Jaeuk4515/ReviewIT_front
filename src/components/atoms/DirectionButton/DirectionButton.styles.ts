import styled from "styled-components";
import Button from "../Button/Button";
import { ReactComponent as Left } from "../../../assets/icons/left.svg";

const CircleButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFF;
  width: 60px;
  height: 60px;
  border: 0;
  border-radius: 50%;
  box-shadow: 0 0 5px #C4C4C4;
  cursor: ${props => props.state === "enable" ? "pointer" : "not-allowed"};
  opacity: ${props => props.state === "disable" ? .4 : 1};

  &:hover {
    ${props => props.state === "enable" ? "box-shadow: 0 0 8px #C4C4C4" : ""}
  };

  @media ${({ theme }) => theme.mediaQuery.medium} {
    display: none;
  };
`

const LeftArrow = styled(Left)`
  @media screen and (max-width: 800px) {
    width: 7px;
    height: 14px;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    width: 5px;
    height: 10px;
  };
  @media screen and (max-width: 400px) {
    width: 4px;
    height: 8px;
  };
`

const RightArrow = styled(LeftArrow)`
  transform: rotate(180deg);
`

export { CircleButton, LeftArrow, RightArrow }
