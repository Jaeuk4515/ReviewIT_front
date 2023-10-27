import { InputBox } from "./Input.styles";

interface InputType {
  color: string;
  width: string;
  height: string;
}

export default function Input({color, width, height}: InputType) {
  return (
    <InputBox color={color} width={width} height={height} />
  )
}