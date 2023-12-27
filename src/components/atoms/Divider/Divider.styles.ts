import styled from "styled-components";

const Line = styled.div<{width: string, minwidth: string}>`
  height: 0;
  width: ${props => props.width};
  min-width: ${props => props.minwidth};
  border: 1px solid #C4C4C4;
`

export { Line }