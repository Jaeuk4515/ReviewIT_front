import { CircleButton } from "./DirectionButton.styles";

interface ButtonType {
  direction: string;
  state: "enable" | "disable";
}

export default function DirectionButton({ direction, state }: ButtonType) {
  return (
    <CircleButton direction={direction} state={state} />
  )
}
