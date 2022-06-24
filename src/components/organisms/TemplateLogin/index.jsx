import { Login } from "../../molecules/Login";
import { LogoKenzieHub } from "../../atoms/LogoKenzieHub";
import { Conteiner, Content } from "./style.js";

export const TemplateLogin = () => {
  return (
    <Conteiner heightLogin widthMoblie>
      <div>
        <LogoKenzieHub />
      </div>

      <Content>
        <Login />
      </Content>
    </Conteiner>
  );
};
