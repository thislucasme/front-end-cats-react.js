import React, { useContext } from "react";
import AuthContext from "../context/auth";
import { SignRoutes } from "./SignRoutes";
import { HomeRoutes } from "./HomeRoutes";
import { BrowserRouter, Route } from "react-router-dom";
import { Busca } from "../pages/busca.gatos";
import { Login } from "../pages/login";
const Routes: React.FC = () => {
	const { signed } = useContext(AuthContext);

	console.log(window.location.pathname)
	return (
		<BrowserRouter>
			<Route path="/" component={Busca} />
			<Route path="/login" component={Login} />
		</BrowserRouter>
	)
}
export default Routes;