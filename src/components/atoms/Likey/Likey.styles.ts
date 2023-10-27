import styled from "styled-components";
import heart from "../../../assets/icons/heart.svg"

const LikeyArea = styled.div`
  display: flex;
  gap: .4rem;
  align-items: center;
`

const LikeyIcon = styled.div`
  background-image: url(${heart});
  bakcground-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 15px;
  height: 15px;
`

const LikeyNum = styled.span`

`

export { LikeyArea, LikeyIcon, LikeyNum }