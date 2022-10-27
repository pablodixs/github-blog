import styled from 'styled-components'

export const PostBodyContainer = styled.main`
  max-width: 864px;
  width: 100%;
  padding: 2.5rem 2rem;

  h1,
  h2,
  h3 {
    margin: 2rem 0 0.5rem;
    color: ${(props) => props.theme['gray-100']};
  }

  ul {
    list-style: none;

    li {
      margin: 1rem 0;
      padding: 0.7rem 1rem;
      background-color: ${(props) => props.theme['blue-700']};
      border-radius: 6px;
      line-height: 140%;
      color: ${(props) => props.theme['blue-100']};

      strong {
        display: block;
        font-size: 1.125rem;
        font-weight: bold;
        margin-bottom: 0.2rem;
        color: ${(props) => props.theme['gray-100']};
      }
    }
  }

  p {
    margin-bottom: 0.5rem;
    line-height: 150%;
    color: ${(props) => props.theme['blue-100']};
  }

  img {
    width: 100%;
    object-fit: cover;
  }
`
