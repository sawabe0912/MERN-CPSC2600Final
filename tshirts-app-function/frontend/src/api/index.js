import axios from "axios";

export const api = axios.create({
	baseURL: "http://localhost:3000/api",
});

export const insertTshirt = (payload) => api.post("/tshirt", payload);
export const insertWebsite = (payload) => api.post("/website", payload);
export const getAllTshirts = () => api.get("/tshirts");
export const deleteTshirtById = (id) => api.delete(`/tshirt/${id}`);
export const getTshirtById = (id) => api.get(`/tshirt/${id}`);
export const updateTshirtById = (id, payload) =>
	api.put(`/tshirt/${id}`, payload);

const apis = {
	deleteTshirtById,
	getTshirtById,
	updateTshirtById,
	insertWebsite,
	insertTshirt,
	getAllTshirts,
};

export default apis;
