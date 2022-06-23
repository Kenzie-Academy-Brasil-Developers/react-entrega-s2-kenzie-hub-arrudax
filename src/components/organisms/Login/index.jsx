import Logo from "../../../assets/logo/Logo.svg";
import { FormLogin } from "../../molecules/FormLogin";

import { Conteiner, Content } from "./style.js";

export const Login = () => {
  return (
    <Conteiner themeLoginHeight themeLoginWidth>
      <div>
        <img src={Logo} alt="Logo escrito da KenzieHub" />
      </div>
      <Content>
       <FormLogin />
      </Content>
    </Conteiner>
  );
};
