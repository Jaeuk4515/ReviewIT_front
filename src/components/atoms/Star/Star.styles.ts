import styled from "styled-components";
import { ReactComponent as Star } from "../../../assets/icons/star.svg";

const StyledStar = styled(Star)<{status: "full" | "empty", onClick?: (index: number) => void}>`
  fill: ${props => props.status === "full" ? "#FFC700" : "#D9D9D9"};

  @media ${({ theme }) => theme.mediaQuery.medium} {
    width: 23px;
    height: 23px;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    width: 22px;
    height: 22px;
  };
  @media screen and (max-width: 500px) {
    width: 20px;
    height: 20px;
  };
  @media screen and (max-width: 450px) {
    width: 18px;
    height: 18px;
  };
`

export { StyledStar }