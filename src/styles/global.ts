import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

  body {
    background-color: ${(props) => props.theme['blue-800']};
    color: ${(props) => props.theme['gray-100']};
    font-family: 'Montserrat', sans-serif;
  }

  button {
    border: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`
