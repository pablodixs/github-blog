import styled from 'styled-components'

export const PostsContainer = styled.main`
  width: 100%;
  display: grid;
  row-gap: 2.5rem;
  grid-template-columns: repeat(2, 48%);
  justify-content: space-between;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
