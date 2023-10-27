import { StyledStar } from "./Star.styles";

export default function Star({ status }: {status: "full" | "empty"}) {
  return <StyledStar status={status} />
}