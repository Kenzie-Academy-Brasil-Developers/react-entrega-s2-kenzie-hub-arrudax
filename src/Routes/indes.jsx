import { Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

function Routes() {
  return (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default Routes;
