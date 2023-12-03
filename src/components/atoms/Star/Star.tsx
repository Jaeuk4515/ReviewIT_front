import { StyledStar } from "./Star.styles";

interface StarType {
  mode: "view" | "edit";
  status: "full" | "empty";
  onClick: (index: number) => void;
}

export default function Star({ mode, status, onClick }: StarType) {
  return (
    <>
      {mode === "view" 
        ? <StyledStar status={status} /> 
        : <StyledStar status={status} onClick={onClick} />}
    </>
  )
}