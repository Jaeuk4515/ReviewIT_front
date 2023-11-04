import { CircleButton } from "./DirectionButton.styles";

interface ButtonType {
  className: string;
  direction: string;
  state: "enable" | "disable";
}

export default function DirectionButton({ className, direction, state }: ButtonType) {
  return (
    <CircleButton className={className} direction={direction} state={state} />
  )
}
