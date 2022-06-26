import styled from "styled-components";

export const Conteiner = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;

  .information__user {
    width: 100%;
    height: 7rem;

    padding: 0 6rem 0 6rem;

    border-bottom: 2px solid var(--Grey-3);

    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    align-items: center;
  }


  `;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin-top: 2rem;

  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: column;

  .showcase__add {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-around;
    align-content: center;

    button {
      background-color: var(--Grey-3);
    }
  }

 
`;

export const Background = styled.div`
  background-color: var(--Grey-3);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  max-width: 1350px;
  width: 100%;
  height: 85%;

  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-around;
  align-content: center;

  @media (min-width: 1115px) {
    width: 55%;
  }

  @media (min-width: 600px) {
    width: 55%;
  }
`;
