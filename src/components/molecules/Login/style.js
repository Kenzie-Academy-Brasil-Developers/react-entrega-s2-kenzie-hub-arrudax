import styled from "styled-components";

export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;

  gap: 1.5rem;

  width: 85%;

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
