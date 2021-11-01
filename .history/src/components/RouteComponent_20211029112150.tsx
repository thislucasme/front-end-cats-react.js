import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from './Login';
import { Busca } from './BuscaGatos';
export const RouteCommponent = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={Busca} />
				<Route path="login" component={Login} />
			</Switch>
		</BrowserRouter>
	);
}