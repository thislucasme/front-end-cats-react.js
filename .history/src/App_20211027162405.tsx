import React from "react";
import { Cadastro } from "./pages/cadastro.gatos";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Busca } from "./pages/busca.gatos";
import { Login } from "./pages/login";


export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/cadastro'} component={Cadastro} />
        <Route exact path={'/buscar '} component={Busca} />
        <Route exact path={'/login '} component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
