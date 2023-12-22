import { Line } from "./Divider.styles"

interface DividerType { 
  className: string;
  width: string;
  minwidth?: string;
}

export default function Divider({ className, width, minwidth }: DividerType) {
  return (
    <Line className={className} width={width} minwidth={minwidth!} />
  )
}