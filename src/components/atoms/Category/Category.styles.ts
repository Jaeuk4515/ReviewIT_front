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

const CategoryButton = styled.div`
  height: 45px;
  width: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  box-shadow: 0 0 4px #C4C4C4;
  gap: .5rem;
  padding: 0 20px;
`

const Img = styled.div<{category: string}>`
  background-image: url(${props => props.category});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 22px;
  height: 22px;
`

const Name = styled.span<{padding: string}>`
  font-size: 20px;
  height: 25px;
  line-height: 25px;
  padding-left: ${props => props.padding};
`

export { CategoryArea, CategoryButton, Img, Name }