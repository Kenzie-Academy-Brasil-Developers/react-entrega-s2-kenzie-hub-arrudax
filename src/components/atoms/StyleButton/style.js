import styled, { css } from "styled-components";

export const Conteiner = styled.button`
  max-width: 320px;
  height: 48px;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: var(--Color-primary-Focus);
  }

  ${(props) => {
    switch (props.colorSchema) {
      case "primary":
        return css`
          background-color: var(--Color-primary);

          width: 100%;

          color: white;

          font-style: normal;
          font-weight: 500;
          font-size: 16px;
        `;
      case "secondary":
        return css`
          background-color: var(--Color-primary-Negative);
          width: 100%;

          color: white;

          font-style: normal;
          font-weight: 500;
          font-size: 16px;
        `;
      case "grey":
        return css`
          background-color: var(--Grey-1);
          width: ${(props) => props.sizeButton};

          color: white;

          font-style: normal;
          font-weight: 500;
          font-size: 16px;

          &:hover {
            background-color: #343b41;

            box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
          }
        `;

      default:
        return false;
    }
  }}
`;
