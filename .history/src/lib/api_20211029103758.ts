import axios from "axios";

export const apiEndPoint = 'http://localhost:3000';

export const api = axios.create({
	baseURL: apiEndPoint
});


api.interceptors.request.use(
	config => {
		const token = localStorage.getItem('@App:token');
		api.defaults.headers.common['Authorization'] = `Bearer ${token}`;


		return config;
	}
)