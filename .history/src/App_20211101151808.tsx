import React from "react";
import { AuthProvider } from "./context/auth";
import { RouteCommponent } from "./components/RouteComponent";
import { RecoilRoot } from 'recoil';
export const App: React.FC = () => {
  return (
    <AuthProvider>
      <RouteCommponent />
    </AuthProvider>
  );
}
