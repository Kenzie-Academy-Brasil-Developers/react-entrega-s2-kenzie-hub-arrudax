import styled from "styled-components";

export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .position {
    padding: 2rem;

    .singup__header {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;

      width: 90%;
    }

    .form__header {
      margin-bottom: 1.5rem;

      width: 100%;

      display: flex;
      justify-content: ${(props) => props.positionLogin};
      align-items: center;

      button {
        background-color: var(--Grey-3);
        font-weight: 600;
        font-size: 12px;
      }

      img {
        width: 7rem;
      }
    }

    @media (min-width: 280px) {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-right: -50%;
      transform: translate(-50%, -50%);

      padding: 0;

      width: 16rem;
      margin-top: 8rem;
    }

    @media (min-width: 390px) {
      

      width: 17rem;
      margin-top: 0;
    }

    @media (min-width: 500px) {
      

      width: 22rem;
     
    }
  }
`;

export const Content = styled.div`
  background-color: var(--Grey-3);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
`;
