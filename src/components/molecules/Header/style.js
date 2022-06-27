import styled from "styled-components";

export const Conteiner = styled.div`
  height: 6rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-content: center;

  border-bottom: 2px solid var(--Grey-3);

  button {
    background-color: var(--Grey-3);

    &:hover {
    background-color: #343B41;
      
    }
  }

  @media (min-width: 280px) {
    img {
      max-width: 145px;
      width: 40%;
    }
  }
`;
