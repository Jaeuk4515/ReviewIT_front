import Star from "../../atoms/Star/Star";
import { StarWrapper } from "./Stars.styles";

export default function Stars({ grade }: {grade:number}) {
  const starStatus: ("empty" | "full")[] = [
    "empty",
    "empty",
    "empty",
    "empty",
    "empty"
  ];

  for (let i = 0; i < grade; i++) {
    starStatus[i] = "full";
  }

  return (
    <StarWrapper>
      {starStatus.map((status, idx) => {
        return <Star key={idx} status={status} />
      })}
    </StarWrapper>
  )
}