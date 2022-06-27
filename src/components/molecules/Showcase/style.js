import styled from "styled-components";

export const Conteiner = styled.div`
  width: 100%;
  height: 100%;

  overflow-x: auto;

  button {
    background-color: var(--Grey-3);
    svg {
      font-size: 25px;
    }
    &:hover {
      background-color: #343b41;
    }
  }
`;

export const Content = styled.ul`
  display: flex;
  align-content: space-around;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  gap: 1rem;

  padding: 2rem;

  @media (min-width: 280px) {
    padding: 0.5rem;
  }
`;
