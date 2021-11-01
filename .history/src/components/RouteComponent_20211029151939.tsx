import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from './Login';
import { Busca } from './BuscaGatos';
import { UserCadastro } from './CadastroUsuarioGato';
export const RouteCommponent = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/login" component={Login} />
				<Route path="/" component={Busca} />
				<Route path="/create-account" component={UserCadastro} />
			</Switch>
		</BrowserRouter>
	);
}