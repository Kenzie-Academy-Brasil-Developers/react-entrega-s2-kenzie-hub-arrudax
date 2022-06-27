import { Redirect } from "react-router-dom";

import { TemplateDashboard } from "../../components/organisms/TemplateDashboard";

import { Conteiner, Content } from "./style.js";

export const Dashboard = ({ authenticated, setAuthenticated }) => {
  if (!authenticated) {
    localStorage.clear();
    return <Redirect to="/login" />;
  }
  return (
    <Conteiner>
      <Content>
        <TemplateDashboard setAuthenticated={setAuthenticated} />
      </Content>
    </Conteiner>
  );
};
