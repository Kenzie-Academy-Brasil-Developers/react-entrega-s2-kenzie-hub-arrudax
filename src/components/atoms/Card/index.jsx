import { FiTrash2 } from "react-icons/fi";

import { StyleButton } from "../StyleButton";
import { Conteiner } from "./style.js";

export const Card = ({ title, status, onClick}) => {
  return (
    <>
      <Conteiner>
        {title}

        <div>
          <span>{status}</span>
          <StyleButton onClick={onClick}>
            <FiTrash2 />
          </StyleButton>
        </div>
      </Conteiner>
    </>
  );
};
