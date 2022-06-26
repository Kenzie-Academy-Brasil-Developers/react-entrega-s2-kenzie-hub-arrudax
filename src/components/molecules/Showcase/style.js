import styled from "styled-components";

export const Conteiner = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;

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

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: space-around;
`;
