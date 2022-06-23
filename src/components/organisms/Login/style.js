import styled from "styled-components";

export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;

  max-width: ${(props) => (props.widthMoblie ? "250px" : "500px")};
  max-height: ${(props) => (props.heightLogin ? "500px" : "800px")};

  height: 100vh;
  width: 100vw;
`;

export const Content = styled.div`
  max-height: 600px;
  max-width: 300px;

  height: 100%;
  width: 100%;

  background-color: var(--Grey-3);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
`;
