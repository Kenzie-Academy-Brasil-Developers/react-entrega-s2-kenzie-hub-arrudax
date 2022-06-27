import styled from "styled-components";

export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > div {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 280px) {
      img {
        max-width: 300px;
        width: 80%;
      }
    }
    @media (min-width: 680px) {
      img {
        max-width: 500px;
        width: 100%;
      }
    }
    > div {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      @media (min-width: 280px) {
        flex-direction: column;
        width: 70%;
        max-width: 200px;
      }

      @media (min-width: 680px) {
        flex-direction: column;
        width: 70%;
        max-width: 340px;
      }

      @media (min-width: 1000px) {
        flex-direction: row;
        max-width: 540px;
      }
    }
  }
`;
