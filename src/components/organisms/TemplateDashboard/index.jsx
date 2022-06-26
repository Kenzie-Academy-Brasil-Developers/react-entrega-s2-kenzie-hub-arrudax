import { AiOutlinePlus } from "react-icons/ai";

import { useEffect, useState } from "react";

import { Background, Conteiner, Content } from "./style.js";

import { Header } from "../../molecules/Header";
import { Showcase } from "../../molecules/Showcase/index.jsx";
import { StyleButton } from "../../atoms/StyleButton/index.jsx";

export const TemplateDashboard = ({ setAuthenticated }) => {
  const [fristName, setFristName] = useState("");
  const [lastName, setLastName] = useState("");

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { name, course_module } = JSON.parse(
    localStorage.getItem("@KenzieHub:user")
  );
  
  function newTech() {
    console.log("NewTech");
    setModalIsOpen(true);
  }
  useEffect(() => {
    if (name.includes(" ")) {
      const nameSplit = name.toLowerCase().split(" ");

      const fristNameUpperCase =
        nameSplit[0].charAt(0).toUpperCase() + nameSplit[0].slice(1);
      const lastNameUpperCase =
        nameSplit[1].charAt(0).toUpperCase() + nameSplit[1].slice(1);

      setFristName(fristNameUpperCase);
      setLastName(lastNameUpperCase);
    }
  }, [name]);

  return (
    <Conteiner>
      <Header setAuthenticated={setAuthenticated} />

      <div className="information__user">
        {name.includes(" ") === true ? (
          <h1>
            Olá {fristName} {lastName}
          </h1>
        ) : (
          <h1>Olá, {name.charAt(0).toUpperCase() + name.slice(1)}</h1>
        )}
        <h2>{course_module}</h2>
      </div>

      <Content>
        <div className="showcase__add">
          <h3>Tecnologias</h3>
          <StyleButton
            colorSchema="grey"
            sizeButton="3rem"
            onClick={() => newTech()}
          >
            <AiOutlinePlus />
          </StyleButton>
        </div>

        <Background>
          <Showcase modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
        </Background>
      </Content>
    </Conteiner>
  );
};
