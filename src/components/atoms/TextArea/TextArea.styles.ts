import styled, { css } from "styled-components";

const TextBox = styled.textarea<{color: string, width: string, height: string, fontSize: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, commentForm: string | undefined}>`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => props.color};
  border-radius: 10px;
  border: 1.5px solid rgba(0, 0, 0, .1);
  resize: none;
  padding: 15px;
  box-sizing: border-box;
  font-size: ${props => props.fontSize};
  color: ${({ theme }) => theme.textColor};

  ${props => props.commentForm === "yes" &&
    css`
      color: black;
    ` }
  
  &:focus {
    outline: none;
  }
`

export { TextBox }