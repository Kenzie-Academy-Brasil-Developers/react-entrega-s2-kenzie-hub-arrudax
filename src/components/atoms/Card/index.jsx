import { FiTrash2 } from "react-icons/fi";

import { StyleButton } from "../StyleButton";
import { Conteiner } from "./style.js";

export const Card = ({ children }) => {

  function deleteItem() {
    console.log('iu1')
  }
  return (
    <>
      <Conteiner>
        {children}

        <div>
          <span>Intermediário</span>
          <StyleButton onClick={() => deleteItem()}> 
            <FiTrash2 />
          </StyleButton>
        </div>
      </Conteiner>
    </>
  );
};
