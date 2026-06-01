import axios from 'axios';

const API = "https://fakestoreapi.com/products";

export const getProducts = async () => {
    const response = await axios.get(API);
    return response.data;
}

export const getSingleProduct = async (id) => {
    const response = await axios.get(`${API}/${id}`);
    return response.data;
}