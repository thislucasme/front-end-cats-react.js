import { useGato } from "./gato.hooks";
import { useState, useEffect } from "react";
export const useTest = () => {

	const [dados, setDados] = useState(null);
	const { cats, isError } = useGato();

	useEffect(() => {
		setDados(cats);
	}, [cats])
	return dados;
}