import { Redirect } from "react-router-dom";

import { TemplateDashboard } from "../../components/organisms/TemplateDashboard";

export const Dashboard = ({ authenticated, setAuthenticated }) => {
  if (!authenticated) {
    localStorage.clear();
    return <Redirect to="/login" />;
  }
  return <TemplateDashboard setAuthenticated={setAuthenticated} />;
};
