import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from './Login';
import { Busca } from './BuscaGatos';
import { UserCadastro } from './CadastroUsuarioGato';
import { Cadastro } from './CadastroGatos';
export const RouteCommponent = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/login" component={Login} />
				<Route path="/create-account" component={UserCadastro} />
				<Route path="/cadastro/gato" component={Cadastro} />
				<Route path="/" component={Busca} />
			</Switch>
		</BrowserRouter>
	);
}