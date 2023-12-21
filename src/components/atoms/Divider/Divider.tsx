import { Line } from "./Divider.styles"

interface DividerType { 
  className: string;
  width: string;
  minWidth?: string;
}

export default function Divider({ className, width, minWidth }: DividerType) {
  return (
    <Line className={className} width={width} minWidth={minWidth!} />
  )
}