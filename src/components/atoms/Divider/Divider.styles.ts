import styled from "styled-components";

const Line = styled.div<{width: string, minWidth: string}>`
  height: 0;
  width: ${props => props.width};
  min-width: ${props => props.minWidth};
  border: 1px solid #C4C4C4;
`

export { Line }