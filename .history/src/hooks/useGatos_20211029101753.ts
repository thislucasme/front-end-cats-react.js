import axios from "axios";
import useSWR from "swr";
import { api } from "../lib/api";

export const useGato = (nome: string) => {
	const apiRequest = (url: string) => api.get(url).then(response => response.data);

	const { data, error, mutate } = useSWR('http://localhost:3000/catsd/' + nome, apiRequest);

	return {
		cats: data,
		isError: error,
		mutate: mutate
	}
}