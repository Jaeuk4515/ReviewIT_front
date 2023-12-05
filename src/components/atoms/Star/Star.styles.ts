import styled from "styled-components";
import { ReactComponent as Star } from "../../../assets/icons/star.svg";

const StyledStar = styled(Star)<{status: "full" | "empty", onClick?: (index: number) => void}>`
  fill: ${props => props.status === "full" ? "#FFC700" : "#D9D9D9"};
`

export { StyledStar }