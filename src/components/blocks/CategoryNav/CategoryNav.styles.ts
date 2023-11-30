import styled from "styled-components";

const CategoryNavBar = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
`

const NavBar = styled.div`
  // height: 100%;
  padding: 5px;
  display: flex;
  gap: .8rem;
  align-items: center;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-content: center;
`

export { CategoryNavBar, NavBar }