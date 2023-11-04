import { PaginationArea, ShiftButton, NumberArea, NumberMark } from "./Pagination.styles";

export default function Pagination() {
  return (
    <PaginationArea>
      <ShiftButton>이전</ShiftButton>
      <NumberArea>
        <NumberMark focus="on">1</NumberMark>
        <NumberMark focus="off">2</NumberMark>
        <NumberMark focus="off">3</NumberMark>
        <NumberMark focus="off">4</NumberMark>
        <NumberMark focus="off">5</NumberMark>
      </NumberArea>
      <ShiftButton>다음</ShiftButton>
    </PaginationArea>
  )
}