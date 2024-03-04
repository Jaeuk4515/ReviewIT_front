import { FadeLoader } from "react-spinners";
import { LoadingArea } from "./Loading.styles";

export default function Loading() {
  return (
    <LoadingArea>
      <FadeLoader color="#A7C4EA" />
    </LoadingArea>
  )
}