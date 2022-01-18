import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from './Login';
import { Busca } from './BuscaGatos';
export const RouteCommponent = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/login" component={Login} />
				<Route path="/" component={Busca} />
			</Switch>
		</BrowserRouter>
	);
}