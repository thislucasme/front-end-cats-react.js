import React, { createContext, useState } from "react";
import api from './../service/api';

interface AuthContextData {
	signed: boolean;
	Login(): Promise<void>;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);


export const AuthProvider: React.FC = ({ children }) => {
	return (
		<AuthContext.Provider value={{ signed: true, Login }}>
			{children}
		</AuthContext.Provider>
	);
};


async function Login() {
	const response = await api.post('/auth/login', {
		email: 'lucassilvaee1245@gmail.com',
		senha: '1234'
	});
	setUser()
	console.log(response.data.user);
}
export default AuthContext;