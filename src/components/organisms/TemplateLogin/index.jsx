import Logo from "../../../assets/logo/Logo.svg";
import { Login } from "../../molecules/Login";

import { Conteiner, Content } from "./style.js";

export const TemplateLogin = () => {
  return (
    <Conteiner heightLogin widthMoblie>
      <div>
        <img src={Logo} alt="Logo escrito da KenzieHub" />
      </div>

      <Content>
        <Login />
      </Content>
    </Conteiner>
  );
};
