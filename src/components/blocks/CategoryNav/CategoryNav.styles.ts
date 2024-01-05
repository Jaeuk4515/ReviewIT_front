import styled from "styled-components";
import { NextButton, PrevButton } from "../ReviewCard/ReviewCard.styles";

const CategoryNavBar = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NavBar = styled.div`
  width: 95%;
  padding: 5px;
  display: flex;
  gap: .46rem;
  align-items: center;
  box-sizing: border-box;
  align-content: center;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;

  &::-webkit-scrollbar {
    display: none;
  };

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  };
`

const LeftShiftButton = styled(PrevButton)`
  top: 4px; left: 0px;
  width: 47px;
  height: 47px;
  display: ${props => props.state === "disable" ? "none" : ""};
`

const RightShiftButton = styled(NextButton)`
  top: 4px; right: 0px;
  width: 47px;
  height: 47px;
  display: ${props => props.state === "disable" ? "none" : ""};
`

export { CategoryNavBar, NavBar, LeftShiftButton, RightShiftButton }