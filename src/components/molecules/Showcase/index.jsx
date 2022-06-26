import { Card } from "../../atoms/Card/index.jsx";
import { Conteiner, Content } from "./style.js";

export const Showcase = () => {
  return (
    <>
      <Conteiner>
        <Content>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9,12,213,23,123,12,12,312,312,3,123].map((children) => (
            <Card children={children} />
          ))}
        </Content>
      </Conteiner>
    </>
  );
};
