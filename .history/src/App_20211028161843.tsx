import React from "react";
import Routes from "./routes/Routes";
import { AuthProvider } from "./context/auth";
export const App: React.FC = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
