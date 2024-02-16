import { PulseLoader } from "react-spinners";
import { LoadingArea } from "./Loading.styles";

export default function Loading() {
  return (
    <LoadingArea>
      <h2 style={{color: "#4370FF"}}>잠시만 기다려주세요</h2>
      <PulseLoader color="#4370FF" />
    </LoadingArea>
  )
}