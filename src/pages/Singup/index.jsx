import { Redirect } from "react-router-dom";
import { TemplateSingup } from "../../components/organisms/TemplateSingup/index.jsx";
import { Conteiner, Content } from "./style.js";

export const Singup = ({ authenticated }) => {
  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Conteiner>
      <Content>
        <TemplateSingup />
      </Content>
    </Conteiner>
  );
};
