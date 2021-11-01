import React from "react";
import Routes from "./routes/Routes";
import AuthContext from "./context/auth";
import { sign } from "crypto";
export const App: React.FC = () => {
  return (
    <AuthContext.Provider value={{ signed: true }}>
      <Routes />
    </AuthContext.Provider>
  );
}
