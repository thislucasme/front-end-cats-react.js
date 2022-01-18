import React, { createContext } from "react";
import api from './../service/api';

const AuthContext = createContext({});
export const AuthProvider: React.FC = ({ children }) => {
	return (
		<AuthContext.Provider value={{ signed: true, Login }}>
			{children}
		</AuthContext.Provider>
	);
};
async function Login() {
	const response = await api.post('/auth/login', {
		email: 'lucassilva@gmail.com',
		password: '1234'
	});
	console.log(response);
}
export default AuthContext;