import React, { useContext } from "react";
import AuthContext from "../context/auth";
import { SignRoutes } from "./SignRoutes";
import { HomeRoutes } from "./HomeRoutes";
const Routes: React.FC = () => {
	const { signed } = useContext(AuthContext);

	return signed ? <HomeRoutes /> : <SignRoutes />
}
export default Routes;