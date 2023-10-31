import { TextBox } from "./TextArea.styles";

interface TextAreaType {
  color: string;
  width: string;
  height: string;
}

export default function TextArea({ color, width, height}: TextAreaType) {
  return (
    <TextBox color={color} width={width} height={height} />
  )
}