import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Login } from './Login';
import { Busca } from './BuscaGatos';
export const RouteCommponent = () => {
	return (
		<BrowserRouter>
			<Route exact path="/	" component={Busca} />
			<Route exact path="/login" component={Login} />
		</BrowserRouter>
	);
}