import styled from "styled-components";

export const Conteiner = styled.div`
  width: 85%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
 
  .form__title {
    text-align: center;
    padding: 1.5rem;
  }

  .form__input {
    height: 75px;

    display: flex;
    flex-direction: column;
    align-content: flex-start;
    justify-content: space-around;
    align-items: stretch;

    .label__input {
    }
  }
  .form__btn {
    padding: 1rem 0 1.5rem 0;
  }
`;
