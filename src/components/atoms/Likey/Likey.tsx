import { LikeyArea, LikeyIcon, LikeyNum } from "./Likey.styles";

// 좋아요 기능 구현하게 되면 좋아요는 버튼으로 제작 
export default function Likey({amount}: {amount: number}) {
  return (
    <LikeyArea>
      <LikeyIcon />
      <LikeyNum>{amount}</LikeyNum>
    </LikeyArea>
  )
}