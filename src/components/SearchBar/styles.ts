import styled from "styled-components";

export const SearchContainer = styled.section`
  margin: 4.5rem 0 3rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-size: 1.125rem;
      color: ${props => props.theme["blue-100"]};
      font-weight: normal;
    }

    span {
      color: ${props => props.theme["blue-300"]};
      font-size: 0.875rem;
    }
  }
`

export const SearchBarContainer = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0.75rem 0;

  input {
    flex: 1;
    padding: 0.75rem 1rem;
    background-color: ${props => props.theme["blue-900"]};
    border: none;
    box-shadow: 0px 0px 0px 1px ${props => props.theme["blue-500"]};
    border-radius: 6px;
    color: ${props => props.theme["gray-100"]};

    &:focus {
      outline: none;
      box-shadow: 0px 0px 0px 1px ${props => props.theme.blue};
    }

    &::placeholder {
      color: ${props => props.theme["blue-300"]};
    }
  }
`