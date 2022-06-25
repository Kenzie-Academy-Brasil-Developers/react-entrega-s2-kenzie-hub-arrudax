import { Conteiner, Content } from "./style.js";
import { TemplateLogin } from "../../components/organisms/TemplateLogin";
import { Redirect } from "react-router-dom";

export const Login = ({ authenticated, setAuthenticated }) => {
  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Conteiner>
      <Content>
        <TemplateLogin setAuthenticated={setAuthenticated} />
      </Content>
    </Conteiner>
  );
};
