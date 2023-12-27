import { TextBox } from "./TextArea.styles";

interface TextAreaType {
  color: string;
  width: string;
  height: string;
  fontSize: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  commentform?: string;
}

export default function TextArea({ color, width, height, fontSize, name, value, onChange, commentform }: TextAreaType) {
  return (
    <TextBox color={color} width={width} height={height} fontSize={fontSize} name={name} value={value} onChange={onChange} commentform={commentform} />
  )
}