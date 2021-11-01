import { api, apiGetUserCat } from '../lib/api'
import { useSWR } from 'swr';
export const useUserGato = () => {
	const apiRequest = (url: string) => api.get(url).then((response) => response.data);
	const [data, error, mutate] = useSWR('http://localhost:3000/cats/', apiGetUserCat);
}