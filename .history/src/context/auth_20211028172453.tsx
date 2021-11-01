import React, { createContext, useContext, useState } from "react";
import api from './../service/api';

interface AuthContextData {
	signed: boolean;
	Login(email: string, senha: string): Promise<void>;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);


export const AuthProvider: React.FC = ({ children }) => {

	const [user, setUser] = useState<object | null>();

	async function Login(email: string, senha: string) {

		const response = await api.post('/auth/login', {
			email: email,
			senha: senha
		});
		setUser(response.data.user);
		api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
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