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
  width: 100%;
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

  @media ${({ theme }) => theme.mediaQuery.medium} {
    gap: .4rem;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    gap: .3rem;
  };
  @media screen and (max-width: 400px) {
    gap: .2rem;
  };
`

const BorderFilter = styled.div<{gradient: "left" | "right"}>`
  position: absolute;
  top: 2px; 
  left: ${props => props.gradient === "left" ? "0px" : "initial"};
  right: ${props => props.gradient === "right" ? "0px" : "initial"};
  width: 90px;
  height: 50px;
  background-image: linear-gradient(${props => props.gradient === "left" ? "90deg" : "270deg"}, white 60%, hsla(0, 0%, 100%, 0));

  @media ${({ theme }) => theme.mediaQuery.medium} {
    display: none;
  };
`

const LeftShiftButton = styled(PrevButton)`
  top: 4px; left: -5px;
  width: 47px;
  height: 47px;
  display: ${props => props.state === "disable" ? "none" : ""};

  @media ${({ theme }) => theme.mediaQuery.medium} {
    display: none;
  };
`

const RightShiftButton = styled(NextButton)`
  top: 4px; right: -5px;
  width: 47px;
  height: 47px;
  display: ${props => props.state === "disable" ? "none" : ""};

  @media ${({ theme }) => theme.mediaQuery.medium} {
    display: none;
  };
`

export { CategoryNavBar, NavBar, BorderFilter, LeftShiftButton, RightShiftButton }