import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Busca } from "../pages/busca.gatos";
export const HomeRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Route path="/" component={Busca} />
		</BrowserRouter>
	);
}