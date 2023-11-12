import { TextBox } from "./TextArea.styles";

interface TextAreaType {
  color: string;
  width: string;
  height: string;
  fontSize: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TextArea({ color, width, height, fontSize, name, value, onChange }: TextAreaType) {
  return (
    <TextBox color={color} width={width} height={height} fontSize={fontSize} name={name} value={value} onChange={onChange} />
  )
}