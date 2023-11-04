import styled from "styled-components";

const CategoryArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .8rem;
  cursor: pointer;
`

const ImgWrapper = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  box-shadow: 0 0 5px #C4C4C4;
`

const Img = styled.div<{category: string}>`
  background-image: url(${props => props.category});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 50px;
  height: 50px;
`

const Name = styled.span`

`

export { CategoryArea, ImgWrapper, Img, Name }