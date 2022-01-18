import axios from "axios";
import useSWR from "swr";

export const useGato = () => {
	const apiRequest = (url: string) => axios.get(url).then(response => response.data);

	const { data, error } = useSWR('http://localhost:3000/cats', apiRequest);

	return {
		gatos: data,
		isError: error
	}
}