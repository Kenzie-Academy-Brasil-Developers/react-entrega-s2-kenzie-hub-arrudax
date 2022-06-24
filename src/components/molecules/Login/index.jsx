import { useHistory } from "react-router-dom";

import { Conteiner, Content } from "./style.js";
import { StyleButton } from "../../atoms/StyleButton";
import { PasswordInput } from "../../atoms/PasswordInput";
import { ThemeInput } from "../../atoms/ThemeInput/index.jsx";

export const Login = () => {
  const history = useHistory();

  const handleNavigation = (patch) => {
    console.log(history);
    return history.push(patch);
  };

  return (
    <Conteiner>
      <Content>
        <div className="form__title">
          <h1>Login</h1>
        </div>
        <div className="form__input">
          <label>Email</label>
          <ThemeInput />
        </div>
        <div className="form__input">
          <label>Senha</label>
          <PasswordInput />
        </div>

        <StyleButton
          onClick={() => handleNavigation("/login")}
          colorSchema="primary"
        >
          Logar
        </StyleButton>

        <div className="form__singup">
          <span>Ainda não possui uma conta?</span>
          <StyleButton
            onClick={() => handleNavigation("/singup")}
            colorSchema="grey"
            sizeButton="100%"
          >
            Cadastre-se
          </StyleButton>
        </div>
      </Content>
    </Conteiner>
  );
};
