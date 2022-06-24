import { Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Singup } from "../pages/Singup";

function Routes() {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/singup">
        <Singup />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default Routes;
