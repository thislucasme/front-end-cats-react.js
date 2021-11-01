import React, { createContext, useState } from "react";
import api from './../service/api';

interface AuthContextData {
	signed: boolean;
	Login(): Promise<void>;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);


export const AuthProvider: React.FC = ({ children }) => {

	const [user, setUser] = useState<object | null>();

	async function Login() {
		const response = await api.post('/auth/login', {
			email: 'lucassilvaee1245@gmail.com',
			senha: '1234'
		});
		setUser(response.data.user);
		api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
		console.log(response.data);
	}

	return (
		<AuthContext.Provider value={{ signed: Boolean(user), Login: Login }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;