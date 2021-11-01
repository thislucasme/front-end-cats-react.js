import React from "react";
import { Cadastro } from "./pages/cadastro.gatos";
import { BrowserRouter, Switch, Route } from "react-router-dom";


export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/cadastro'} component={Cadastro} />
      </Switch>
    </BrowserRouter>
  );
}
