import styled from "styled-components";

const Line = styled.div<{width: string}>`
  height: 0;
  width: ${props => props.width};
  border: 1px solid #C4C4C4;
`

export { Line }