import { InputBox } from "./Input.styles";

interface InputType {
  className: string;
  color: string;
  width: string;
  height: string;
  placeholder?: string;
}

export default function Input({ className, color, width, height, placeholder }: InputType) {
  return (
    <InputBox className={className} color={color} width={width} height={height} placeholder={placeholder} />
  )
}