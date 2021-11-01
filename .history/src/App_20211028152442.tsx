import React from "react";
import { Cadastro } from "./pages/cadastro.gatos";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Busca } from "./pages/busca.gatos";
import { Login } from "./pages/login";
import { UserCadastro } from "./pages/casdastro";
import AuthContext from "./context/auth";


export const App: React.FC = () => {
  return (
    <AuthContext.Provider value={{ signed: true }}>
      <BrowserRouter>
        <Switch>
          <Route exact path={'/cadastro'} component={Cadastro} />
          <Route exact path={'/buscar'} component={Busca} />
          <Route exact path={'/login'} component={Login} />
          <Route exact path={'/cadastro/user'} component={UserCadastro} />

        </Switch>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
