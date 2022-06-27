import styled from "styled-components";

export const Conteiner = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;

  @media (min-width: 280px) {
    .information__user {
      width: 100%;
      height: 7rem;

      
      border-bottom: 2px solid var(--Grey-3);
      
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-around;
      align-items: center;
      
      h2 {
        font-weight: 400;
        font-size: 12px;
      }
    }
  }
  
  @media (min-width: 550px) {
    .information__user {
      flex-direction: row;
      padding: 0 6rem 0 6rem;
      h2 {
        font-size: 16px;
        font-weight: bold;
      }
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;


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
  @media (min-width: 280px) {
    margin: 1rem;
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
  @media (min-width: 280px) {
    width: 80%;
    height: 77%;
  }
`;
