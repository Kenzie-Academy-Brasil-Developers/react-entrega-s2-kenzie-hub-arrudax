import { Redirect } from "react-router-dom";
import { TemplateLandingPage } from "../../components/organisms/TemplateLandingPage";

import { Conteiner, Content } from "./style.js";

export const Home = ({ authenticated }) => {
  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Conteiner>
      <Content>
        <TemplateLandingPage />
      </Content>
    </Conteiner>
  );
};
