import { InputBox } from "./Input.styles";

interface InputType {
  type: string;
  className: string;
  color: string;
  width: string;
  height: string;
  placeholder?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ type, className, color, width, height, placeholder, name, value, onChange }: InputType) {
  return (
    <InputBox type={type} className={className} color={color} width={width} height={height} placeholder={placeholder} name={name} value={value} onChange={onChange} />
  )
}