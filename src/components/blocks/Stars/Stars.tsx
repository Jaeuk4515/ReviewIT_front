import { useEffect, useState } from "react";
import Star from "../../atoms/Star/Star";
import { StarWrapper } from "./Stars.styles";
import { useDispatch } from "react-redux";
import { setGrade } from "../../../store/slices/contentSlice";
import { setNewGrade } from "../../../store/slices/newContentSlice";

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
  const dispatch = useDispatch();
  
  useEffect(() => {
    mode === "edit" && !grade 
    ? dispatch(setGrade(starStatus.filter(el => el === "full").length as 0 | 1 | 2 | 3 | 4 | 5))  // 리뷰 생성일때
    : dispatch(setNewGrade(starStatus.filter(el => el === "full").length as 0 | 1 | 2 | 3 | 4 | 5))  // 리뷰 수정일때
  }, [starStatus]);

  useEffect(() => {
    // 초기 상태 설정 시 모든 별을 빈 별로 초기화
    setStarStatus(Array(5).fill("empty"));
    // grade 값에 따라 일부 별을 색칠
    setStarStatus(prev => prev.map((_, idx) => (idx < grade! ? "full" : "empty")));
  }, [grade]);

  const handleClick = (index: number) => {
    let newStarStatus = [...starStatus];
    for (let i = 0; i <= index; i++) {
      newStarStatus[i] = "full";
    }
    for (let i = index + 1; i < starStatus.length; i++) {
      newStarStatus[i] = "empty";
    }
    setStarStatus(newStarStatus);
  };

  if (mode === "view" && grade) {
    for (let i = 0; i < grade!; i++) {
      starStatus[i] = "full";
    };
  };
  // const handleClick = (index: number) => {
  //   // 클릭한 별까지만 상태를 업데이트
  //   setStarStatus(prev => prev.map((_, i) => (i <= index ? "full" : "empty")));
  // };

  return (
    <StarWrapper>
      {starStatus.map((status, idx) => {
        return <Star key={idx} mode={mode} status={status} onClick={() => handleClick(idx)} />
      })}
    </StarWrapper>
  )
}