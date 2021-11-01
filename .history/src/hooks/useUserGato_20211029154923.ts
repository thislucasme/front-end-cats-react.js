import useSWR from "swr";
import { apiGetUserCat } from "../lib/api";

export const useUserGato = (nome: string) => {
	const { data, error, mutate } = useSWR('http://localhost:3000/auth/user' + nome, apiGetUserCat);

	return {
		userCat: data,
		isError: error,
		mutate: mutate
	}
}