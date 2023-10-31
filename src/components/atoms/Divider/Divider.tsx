import { Line } from "./Divider.styles"

interface DividerType { 
  className: string,
  width: string
}

export default function Divider({ className, width }: DividerType) {
  return (
    <Line className={className} width={width} />
  )
}