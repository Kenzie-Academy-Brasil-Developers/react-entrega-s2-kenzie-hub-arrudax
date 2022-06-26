import { Card } from "../../atoms/Card/index.jsx";
import { MyModal } from "../../atoms/MyModal/index.jsx";
import { Conteiner, Content } from "./style.js";

export const Showcase = ({ modalIsOpen, setModalIsOpen }) => {
  return (
    <>
      <Conteiner>
        <Content>
          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 213, 23, 123, 12, 12, 312, 312, 3,
            123,
          ].map((children, index) => (
            <Card key={index} children={children} />
          ))}

          <MyModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
        </Content>
      </Conteiner>
    </>
  );
};
