import axios from "axios";

const axiosClient = axios.create({
	baseURL: "http://localhost:5000",
	withCredentials: false,
	headers: {
		Accept: "application/json",
	},
});

export default axiosClient;
