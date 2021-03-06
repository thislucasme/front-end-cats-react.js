import axios from "axios";

export const apiEndPoint = 'http://localhost:3000';

export const api = axios.create({
	baseURL: apiEndPoint,

});


api.interceptors.request.use(
	config => {
		const token = localStorage.getItem('@App:token');

		console.log(token);
		if (token) {

			config.headers['Authorization'] = `Bearer ${token}`
		}

		return config;
	}
)
export const apiUserCat = async () => {
	try {
		const res = await api.post('/auth/user');
		return res;
	} catch (e) {
		return e;
	}
}