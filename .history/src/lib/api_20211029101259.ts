import axios from "axios";
export const apiEndPoint = 'http://localhost:3000';
const api = axios.create({
	baseURL: apiEndPoint
});
export default api;