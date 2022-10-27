import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CardContainer = styled.section`
  background-color: ${(props) => props.theme['blue-700']};
  max-width: 54rem;
  padding: 2rem;
  margin: -5rem auto 0;
  border-radius: 10px;
  box-shadow: 0px 3px 28px rgba(0, 0, 0, 0.2);
`

export const CardContent = styled.div`
  width: 100%;

  img {
    width: 9.25rem;
    object-fit: contain;
    border-radius: 8px;
  }
`

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${(props) => props.theme['blue-100']};
  position: relative;

  h1 {
    color: ${(props) => props.theme['gray-100']};
    font-size: 1.5rem;
  }

  p {
    flex: 1;
    margin-top: 0.5rem;
  }
`

export const UserSocialContainer = styled.footer`
  display: flex;
  gap: 2rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.5rem;

    span {
      color: ${(props) => props.theme['blue-100']};
      font-size: 0.875rem;
      font-weight: 500;
    }

    svg {
      color: ${(props) => props.theme['blue-400']};
    }
  }
`

export const PostCardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  a {
    top: 0;
    right: 0;
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    color: ${(props) => props.theme['blue']};

    display: flex;
    align-items: center;
    gap: 0.5rem;

    transition: color ease 150ms;

    &:hover {
      color: ${(props) => props.theme['blue-100']};
    }
  }
`

export const LinkAnchor = styled(Link)`
  top: 0;
  right: 0;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  color: ${(props) => props.theme['blue']};

  display: flex;
  align-items: center;
  gap: 0.5rem;

  transition: color ease 150ms;

  &:hover {
    color: ${(props) => props.theme['blue-100']};
  }
`
