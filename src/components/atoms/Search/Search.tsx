import { SearchArea, SearchBox, IconArea } from "./Search.styles";

interface SearchType {
  color: string;
  width: string;
  height: string;
}

export default function Search({color, width, height}: SearchType) {
  return (
    <SearchArea width={width} height={height}>
      <SearchBox color={color} width={width} height={height} placeholder="Search" onChange={()=>{}} />
      <IconArea />
    </SearchArea>
  )
}