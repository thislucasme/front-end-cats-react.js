import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from './Login';
import { Busca } from './BuscaGatos';
import { Cadastro } from './CadastroGatos';
export const RouteCommponent = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/login" component={Login} />
				<Route path="/" component={Busca} />
				<Route path="/cadastro/gato" component={Cadastro} />
			</Switch>
		</BrowserRouter>
	);
}