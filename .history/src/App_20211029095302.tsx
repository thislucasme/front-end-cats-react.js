import React from "react";
import Routes from "./routes/Routes";
import { AuthProvider } from "./context/auth";
import { RouteCommponent } from "./components/RouteComponent";
export const App: React.FC = () => {
  return (
    <AuthProvider>
      <RouteCommponent />
    </AuthProvider>
  );
}
