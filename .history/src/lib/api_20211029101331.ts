import axios from "axios";
export const apiEndPoint = 'http://localhost:3000';
export const api = axios.create({
	baseURL: apiEndPoint
});