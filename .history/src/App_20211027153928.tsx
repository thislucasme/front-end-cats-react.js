import React from "react";
import { Cadastro } from "./pages/cadastro.gatos";
import { BrowserRouter } from "react-router-dom";


export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Cadastro />
    </BrowserRouter>
  );
}
