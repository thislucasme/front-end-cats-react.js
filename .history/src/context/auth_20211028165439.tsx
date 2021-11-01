import React, { createContext, useState } from "react";
import api from './../service/api';

interface AuthContextData {
	signed: boolean;
	Login(): Promise<void>;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);


export const AuthProvider: React.FC = ({ children }) => {
	const [user, setUser] = useState<object | null>();
	return (
		<AuthContext.Provider value={{ signed: Boolean(user), Login }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;