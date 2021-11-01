import React from "react";
import Routes from "./routes/Routes";
import AuthContext from "./context/auth";
export const App: React.FC = () => {
  return (
    <AuthContext>
      <Routes />
    </AuthContext>
  );
}
