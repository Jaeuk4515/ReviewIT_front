import styled from "styled-components";

const CategoryArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .8rem;
  cursor: pointer;
  margin-right: 7px;
  transition: .35s;

  &:hover {
    transform: scale(1.06);
  }
`

const CategoryButton = styled.div<{active: "on" | "off", buttontheme: "light" | "dark"}>`
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.5px solid ${props => props.active === "on" && props.buttontheme === "light" ? "#256FFF" : "none"};
  border-radius: 25px;
  box-shadow: 0 0 4px #C4C4C4;
  gap: .5rem;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: ${props => props.buttontheme === "light" ? "white" : props.active === "on" ? "white" : "#626265"};

  @media ${({ theme }) => theme.mediaQuery.medium} {
    height: 40px;
    padding: 0 18px;
    gap: .4rem;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    height: 35px;
    padding: 0 16px;
    gap: .3rem;
  };
  @media screen and (max-width: 400px) {
    height: 30px;
    padding: 0 14px;
    gap: .2rem;
  }
`

const Img = styled.div<{category: string}>`
  background-image: url(${props => props.category});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 22px;
  height: 22px;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    width: 20px;
    height: 20px;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    width: 16px;
    height: 16px;
  };
  @media screen and (max-width: 400px) {
    width: 13px;
    height: 13px;
  };
`

const Name = styled.span<{padding: string, active: "on" | "off", nametheme: "light" | "dark"}>`
  font-size: 19px;
  padding-left: ${props => props.padding};
  color: ${props => props.nametheme === "light" ? props.active === "on" ? "#256FFF" : "black" : props.active === "on" ? "black" : "white"};
  white-space: nowrap;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    font-size: 17px;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    font-size: 14px;
  };
  @media screen and (max-width: 400px) {
    font-size: 12px;
  };
`

export { CategoryArea, CategoryButton, Img, Name }