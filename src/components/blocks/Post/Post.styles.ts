import styled from "styled-components";
import ImageCard from "../../atoms/ImageCard/ImageCard";

const PostArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .7rem;
`

const ProductImg = styled(ImageCard)`
  width: 160px;
  height: 160px;
`

const ProductName = styled.span`
  font-weight: bold;
  font-size: 22px;
`

export { PostArea, ProductImg, ProductName }