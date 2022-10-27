import styled from 'styled-components'

export const PostsContainer = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const PostCard = styled.div`
  background-color: ${(props) => props.theme['blue-600']};
  padding: 2rem;
  border-radius: 10px;
  width: 100%;
  cursor: pointer;
  transition: box-shadow ease 150ms;

  &:hover {
    box-shadow: inset 0px 0px 0px 2px ${(props) => props.theme['blue-400']};
  }

  header {
    display: flex;
    margin-bottom: 1.25rem;
    gap: 1rem;

    h1 {
      flex: 1;
      font-size: 1.25rem;
      font-weight: 500;
      color: ${(props) => props.theme['gray-100']};
    }

    span {
      font-size: 0.875rem;
      line-height: 1.5;
      color: ${(props) => props.theme['blue-300']};
    }
  }

  p {
    color: ${(props) => props.theme['blue-100']};
    line-height: 160%;
  }
`
