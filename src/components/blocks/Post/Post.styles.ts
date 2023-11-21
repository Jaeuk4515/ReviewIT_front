import styled from "styled-components";
import ImageCard from "../../atoms/ImageCard/ImageCard";

const PostArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .7rem;
  width: 100%;
`

const ProductImg = styled(ImageCard)`
  width: 80%;
  height: auto;
  aspect-ratio: 1;
  background-size: cover;
`

const ProductName = styled.span`
  font-weight: bold;
  font-size: 17px;
  width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`

export { PostArea, ProductImg, ProductName }