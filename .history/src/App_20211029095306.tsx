import React from "react";
import { AuthProvider } from "./context/auth";
import { RouteCommponent } from "./components/RouteComponent";
export const App: React.FC = () => {
  return (
    <AuthProvider>
      <RouteCommponent />
    </AuthProvider>
  );
}
