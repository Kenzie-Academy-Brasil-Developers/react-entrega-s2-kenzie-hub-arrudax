import { useHistory } from "react-router-dom";

import { Conteiner, Content } from "./style.js";
import { StyleButton } from "../../atoms/StyleButton";
import { PasswordInput } from "../../atoms/PasswordInput";
import { ThemeInput } from "../../atoms/ThemeInput/index.jsx";

export const Login = ({ register, errors }) => {
  const history = useHistory();

  const handleNavigation = (patch) => {
    return history.push(patch);
  };

  return (
    <Conteiner>
      <Content>
        <div className="form__title">
          <h1>Login</h1>
        </div>
        <div className="form__input">
          <div className="label__input">
            <label>E-mail</label>
            {!!errors && <span>{errors.email?.message}</span>}
          </div>

          <ThemeInput
            register={register}
            name="email"
            placeholder="Digite aqui seu email"
          />
        </div>
        <div className="form__input">
          <div className="label__input">
            <label>Senha</label>
            {!!errors && <span>{errors.password?.message}</span>}
          </div>

          <PasswordInput
            modificador="password"
            register={register}
            name="password"
            placeholder="Digite aqui sua senha"
          />
        </div>

        <StyleButton type="submit" colorSchema="primary">
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
