import { useContext, useEffect, useState } from "react";
import Star from "../../atoms/Star/Star";
import { StarWrapper } from "./Stars.styles";
import { starContext } from "../../pages/ReviewCreate/ReviewCreate";

interface StarsType {
  mode: "view" | "edit";
  grade?: number;
}

export default function Stars({ mode, grade }: StarsType) {
  const [ starStatus, setStarStatus ] = useState<("empty" | "full")[]>([
    "empty",
    "empty",
    "empty",
    "empty",
    "empty"
  ]);
  const { content, setContent } = useContext(starContext);
  
  useEffect(() => {
    setContent({
      ...content,
      grade: starStatus.filter(el => el === "full").length as 0 | 1 | 2 | 3 | 4 | 5,
    });
  }, [starStatus])

  const handleClick = (index: number) => {
    let newStarStatus = [...starStatus];
    for (let i = 0; i <= index; i++) {
      newStarStatus[i] = "full";
    }
    for (let i = index + 1; i < starStatus.length; i++) {
      newStarStatus[i] = "empty";
    }
    setStarStatus(newStarStatus);
  }

  for (let i = 0; i < grade!; i++) {
    starStatus[i] = "full";
  }

  return (
    <StarWrapper>
      {starStatus.map((status, idx) => {
        return <Star key={idx} mode={mode} status={status} onClick={() => handleClick(idx)} />
      })}
    </StarWrapper>
  )
}