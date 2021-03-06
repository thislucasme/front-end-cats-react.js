import React, { useContext } from "react";
import AuthContext from "../context/auth";
import { BrowserRouter, Route } from "react-router-dom";
import { Busca } from "../pages/BuscaGatos";
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