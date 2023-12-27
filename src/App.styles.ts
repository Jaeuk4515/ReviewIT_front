import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  body {
    font-family: Arial, sans-serif;
    height: 100vh;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
  }
`

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
`

export { GlobalStyle, LayoutWrapper }