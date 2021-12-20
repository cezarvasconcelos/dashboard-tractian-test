import axios from "axios";

const api = axios.create({
	baseURL: "https://my-json-server.typicode.com/tractian/fake-api",
});

api.interceptors.request.use(async config => {
	return config;
});

export default api;