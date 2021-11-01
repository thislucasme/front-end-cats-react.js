import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Login } from "../pages/login";
export const SignRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Route path="/" component={Login} />
		</BrowserRouter>
	);
}