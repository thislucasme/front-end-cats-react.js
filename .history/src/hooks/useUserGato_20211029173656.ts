import useSWR from "swr";
import { apiPostUserCat } from "../lib/api";

export const useUserGato = () => {
	const { data, error, mutate } = useSWR('auth-user', apiPostUserCat);

	return {
		userCat: data,
		isError: error,
		mutate: mutate
	}

	const logout = async () => {
		localStorage.removeItem('@App:token');
	}
}