import { useEffect, useState } from "react";
import { Card } from "../../atoms/Card/index.jsx";
import { MyModal } from "../../atoms/MyModal/index.jsx";
import { Conteiner, Content } from "./style.js";

import { apiKenzieHub } from "../../../services/api.js";
import { toast } from "react-toastify";

export const Showcase = ({ modalIsOpen, setModalIsOpen }) => {
  const [newTech, setNewTech] = useState([]);

  const [user] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:user")) || ""
  );

  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );

  const { id } = user;

  function loadTechs() {
    apiKenzieHub
      .get(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setNewTech(response.data.techs))
      .catch((err) => console.log(err));
  }

  function createTechs({ status, title }) {
    if (!newTech) {
      return toast.error("Complete o campo");
    }
    apiKenzieHub
      .post(
        `/users/techs`,
        {
          title,
          status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((_) => loadTechs())
      .catch((_) => toast.error("Tecnologia já cadastrada"));

    setModalIsOpen(false);
  }

  function deleteItem(id) {
    const filterTech = newTech.filter((tech) => tech.id !== id);
    apiKenzieHub
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => setNewTech(filterTech));
  }

  useEffect(() => {
    loadTechs();
  });
  return (
    <>
      <Conteiner>
        <Content>
          {newTech.map(({ title, status, id }) => (
            <Card
              key={id}
              title={title}
              status={status}
              onClick={() => deleteItem(id)}
            />
          ))}

          <MyModal
            modalIsOpen={modalIsOpen}
            setModalIsOpen={setModalIsOpen}
            createTechs={createTechs}
          />
        </Content>
      </Conteiner>
    </>
  );
};
