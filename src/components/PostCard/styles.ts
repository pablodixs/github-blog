import styled from 'styled-components'

export const PostCard = styled.div`
  background-color: ${(props) => props.theme['blue-600']};
  padding: 2rem;
  border-radius: 10px;
  width: 100%;
  height: 16.5rem;
  cursor: pointer;
  transition: box-shadow ease 150ms;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    span {
      font-size: 0.875rem;
      line-height: 1.5;
      color: ${(props) => props.theme['blue-300']};
    }
  }

  p {
    display: block;
    line-height: 160%;
    color: ${(props) => props.theme['blue-100']};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
  }
`
