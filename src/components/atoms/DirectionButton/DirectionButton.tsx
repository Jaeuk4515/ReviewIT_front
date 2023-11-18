import { CircleButton } from "./DirectionButton.styles";


interface ButtonType {
  className: string;
  direction: string;
  state: "enable" | "disable";
  onClick: () => void;
}

export default function DirectionButton({ className, direction, state, onClick }: ButtonType) {
  return (
    <CircleButton className={className} direction={direction} state={state} onClick={onClick} />
  )
}
