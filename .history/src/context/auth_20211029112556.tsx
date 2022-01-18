import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from '../lib/api';

interface AuthContextData {
	signed: boolean;
	Login(email: string, senha: string): Promise<void>;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);


export const AuthProvider: React.FC = ({ children }) => {

	const [user, setUser] = useState<object | null>();

	useEffect(() => {
		const storageUser = localStorage.getItem('@App:user');
		const storageToken = localStorage.getItem('@App:token');

		if (storageToken && storageUser) {
			setUser(JSON.parse(storageUser));
			//api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
		}
	}, [])

	async function Login(email: string, senha: string) {

		const response = await api.post('/auth/login', {
			email,
			senha
		});
		setUser(response.data.user);
		localStorage.setItem('@App:token', response.data.access_token);
		console.log(response.data.user);
	}

	return (
		<AuthContext.Provider value={{ signed: Boolean(user), Login: Login }}>
			{children}
		</AuthContext.Provider>
	);
};

export function useAuth() {
	const context = useContext(AuthContext);
	return context;
}

export default AuthContext;