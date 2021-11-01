import axios from "axios";
import useSWR from "swr";

export const useGato = (nome: string) => {
	const apiRequest = (url: string) => axios.get(url).then(response => response.data);

	const { data, error } = useSWR('http://localhost:3000/cats' + nome, apiRequest);

	return {
		cats: data,
		isError: error
	}
}