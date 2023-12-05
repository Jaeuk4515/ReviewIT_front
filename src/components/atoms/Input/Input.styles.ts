import styled from "styled-components";

const InputBox = styled.input<{color: string, width: string, height: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void}>`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => props.color};
  border-radius: 10px;
  border: 1.5px solid rgba(0, 0, 0, .1);
  padding: 0 15px;
  font-size: 17px;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
  }
`

export { InputBox }