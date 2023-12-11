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

const CategoryButton = styled.div<{active: "on" | "off", width: string | undefined}>`
  height: 45px;
  width: ${props => props.width ? props.width : "130px"};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.5px solid ${props => props.active === "on" ? "#256FFF" : "none"};
  border-radius: 25px;
  box-shadow: 0 0 4px #C4C4C4;
  gap: .5rem;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: white;
`

const Img = styled.div<{category: string}>`
  background-image: url(${props => props.category});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 22px;
  height: 22px;
`

const Name = styled.span<{padding: string, active: "on" | "off"}>`
  font-size: 20px;
  height: 25px;
  line-height: 25px;
  padding-left: ${props => props.padding};
  color: ${props => props.active === "on" ? "#256FFF" : "black"};
`

export { CategoryArea, CategoryButton, Img, Name }