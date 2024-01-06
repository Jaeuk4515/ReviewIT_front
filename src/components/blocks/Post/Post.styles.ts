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
  min-width: 140px;
  min-height: 140px;
  height: auto;
  aspect-ratio: 1;
  background-size: cover;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    width: 90%;
    min-width: 128px;
    min-height: 128px;
  };
`

const ProductName = styled.span`
  font-weight: bold;
  font-size: 17px;
  width: 150px;
  height: 21px;
  line-height: 21px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  margin-top: 5px;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    font-size: 16px;
    width: 130px;
  };

  @media ${({ theme }) => theme.mediaQuery.small} {
    font-size: 15px;
  };
`

export { PostArea, ProductImg, ProductName }