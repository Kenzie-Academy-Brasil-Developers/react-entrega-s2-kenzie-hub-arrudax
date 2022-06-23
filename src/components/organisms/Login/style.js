import styled from "styled-components";

export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  max-height: ${(props) => (props.themeLoginHeight ? "500px" : "800px")};
  max-width: ${(props) => (props.themeLoginWidth ? "300px" : "500px")};

  height: 100vh;
  width: 100vw;
`;

export const Content = styled.div`
  max-height: 600px;
  max-width: 300px;

  height: 80%;
  width: 80%;

  background: var(--Grey-3);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;
