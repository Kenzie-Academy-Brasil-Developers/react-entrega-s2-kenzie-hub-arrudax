import { useHistory } from "react-router-dom";
import { ImgLandingPage } from "../../atoms/ImgLandingPage";
import { StyleButton } from "../../atoms/StyleButton";

import { Conteiner } from "./style.js";
export const LandingPage = () => {
  const history = useHistory();

  console.log(history);

  function go(patch) {
    history.push(patch);
  }

  return (
    <Conteiner>
      <div>
        <ImgLandingPage />
        <div>
          <StyleButton colorSchema="primary" onClick={() => go("/login")}>
            Logar
          </StyleButton>
          <StyleButton
            colorSchema="grey"
            sizeButton="100%"
            onClick={() => go("/singup")}
          >
            Cadastrar-se
          </StyleButton>
        </div>
      </div>
    </Conteiner>
  );
};
