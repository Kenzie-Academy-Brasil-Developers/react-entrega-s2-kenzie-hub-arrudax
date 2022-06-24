import styled from "styled-components";

export const Conteiner = styled.input`
  background-color: var(--Grey-1);
  color: var(--Color-text);

  width: 100%;
  height: 48px;

  border: none;
  border-radius: 5px;
  padding: 0.7rem;

  &::placeholder {
    color: var(--Color-text);

    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 16px;
  }

  &:focus {
    border: 1px solid var(--Color-text);
    padding: 1rem;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 16px;
  }
`;
