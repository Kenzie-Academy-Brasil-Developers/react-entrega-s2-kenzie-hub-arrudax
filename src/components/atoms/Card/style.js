import styled from "styled-components";

export const Conteiner = styled.li`
  width: 100%;
  height: 50px;

  background-color: #121214;

  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;

  color: var(--Color-text);

  > div {
    display: flex;
    align-items: center;

    span {
      font-weight: 400;

      margin-right: 0.7rem;
    }
    svg {
      color: var(--Trash);
    }

    button {
      background: none;
    }
  }

  &:hover {
    background-color: var(--Hover-card);
  }
`;
