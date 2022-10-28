import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  margin-top: 2rem;
  padding: 2rem 0;
  background-color: ${(props) => props.theme['blue-900']};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.25rem;

  p {
    &:first-child {
      font-weight: 500;
      color: ${(props) => props.theme['gray-200']};
    }
    display: block;
    text-align: center;
    font-size: 0.875rem;
    color: ${(props) => props.theme['blue-300']};
  }
`
