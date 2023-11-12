import { StyledStar } from "./Star.styles";
import { starContext } from "../../pages/ReviewCreate/ReviewCreate";
import { useContext, useEffect, useState } from "react";

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