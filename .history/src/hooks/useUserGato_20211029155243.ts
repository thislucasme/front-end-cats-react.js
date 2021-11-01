import useSWR from "swr";
import { apiGetUserCat } from "../lib/api";

export const useUserGato = () => {
	const { data, error, mutate } = useSWR('auth-user', apiGetUserCat);

	return {
		userCat: data,
		isError: error,
		mutate: mutate
	}
}