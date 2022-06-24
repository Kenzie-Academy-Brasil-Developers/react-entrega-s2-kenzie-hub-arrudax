import { useHistory } from "react-router-dom";

import { Conteiner, Content } from "./style.js";

import { Login } from "../../molecules/Login";
import { LogoKenzieHub } from "../../atoms/LogoKenzieHub";
import { StyleButton } from "../../atoms/StyleButton";
import { Singup } from "../../molecules/Singup";

export const TemplateLogin = () => {
  const history = useHistory();

  return (
    <>
      {history.location.pathname !== "/singup" ? (
        <Conteiner heightLogin positionLogin="center">
          <div className="position">
            <div className="form__header">
              <LogoKenzieHub />
            </div>

            <Content>
              <Login />
            </Content>
          </div>
        </Conteiner>
      ) : (
        <Conteiner positionLogin="space-between">
          <div className="position">
            <div className="form__header">
              <LogoKenzieHub />
              <StyleButton colorSchema="grey" sizeButton="5rem">
                Voltar
              </StyleButton>
            </div>

            <Content>
              <Singup />
            </Content>
          </div>
        </Conteiner>
      )}
    </>
  );
};
