import styled, { createGlobalStyle } from 'styled-components'

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
    -webkit-font-smoothing: antialiased;
  }

  button, input {
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
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
export const Container = styled.div`
  max-width: 54rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`
