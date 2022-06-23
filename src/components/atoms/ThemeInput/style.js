import styled from "styled-components";

export const Conteiner = styled.input`
  background-color: var(--Grey-1);
  color: var(--Color-text);
  height: 48px;

  border: none;
  border-radius: 5px;

  &:focus {
    border: 1px solid var(--Color-text);
    padding: 0.5rem;
  }
`;
