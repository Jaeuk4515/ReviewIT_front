import styled from "styled-components";
import Button from "../Button/Button";
import left from "../../../assets/icons/left.svg"
import right from "../../../assets/icons/right.svg"

const CircleButton = styled(Button)`
  background-image: url(${props => props.direction === "left" ? left : right});
  background-repeat: no-repeat;
  background-position: center;
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

export { CircleButton }
