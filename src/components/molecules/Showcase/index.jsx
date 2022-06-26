import { Card } from "../../atoms/Card/index.jsx";
import { Conteiner, Content } from "./style.js";

export const Showcase = () => {

  return (
    <>
      <Conteiner>
        <Content>
          <h1>sadasdsa</h1>
          {[1,2,3].map((ele) => <Card />)}
        </Content>
      </Conteiner>
    </>
  );
};
