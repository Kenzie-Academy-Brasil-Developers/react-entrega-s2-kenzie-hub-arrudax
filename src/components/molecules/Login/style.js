import styled from "styled-components";

export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;

  width: 100%;
`;

export const Content = styled.div`
  padding: 1.5rem;

  display: flex;
  flex-direction: column;

  gap: 1.2rem;

  display: flex;
  .form__title {
    text-align: center;

    span {
      font-weight: 400;
    }
  }
  .form__input {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .form__singup {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    span {
      text-align: center;
      width: 100%;
    }
  }
`;
