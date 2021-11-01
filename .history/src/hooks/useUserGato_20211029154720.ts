import useSWR from "swr";
import { api } from "../lib/api";

export const useUserGato = (nome: string) => {
	const apiRequest = (url: string) => api.get(url).then(response => response.data);

	const { data, error, mutate } = useSWR('http://localhost:3000/cats/' + nome, apiRequest);

	return {
		cats: data,
		isError: error,
		mutate: mutate
	}
}