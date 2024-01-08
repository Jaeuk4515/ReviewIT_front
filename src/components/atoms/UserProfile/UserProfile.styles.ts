import styled from "styled-components";
import { Img } from "../Category/Category.styles";

const UserImg = styled(Img)`
  width: 35px;
  height: 35px;
  border-radius: 20px;
  background-size: cover;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    width: 30px;
    height: 30px;
  };
`

export { UserImg }