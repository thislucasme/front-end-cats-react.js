import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//import { Login } from './Login';
import { Busca } from './BuscaGatos';
import { Menu } from '../components/menu';
export const RouteCommponent = () => {
	return (
		<BrowserRouter>
			<Route path="/" element={<Menu />} />
			<Route path="/" component={Busca} />
		</BrowserRouter>
	);
}