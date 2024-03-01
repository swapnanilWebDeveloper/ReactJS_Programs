// api

import axios from "axios";

const BASE_URL = "https://dummyjson.com";

const axiosInstance = axios.create({
       baseURL : BASE_URL,
})

// GET request
export const getProducts = () => {
      return axiosInstance.get("/products");
}

// POST request 
export const  createProduct = (productData) => {
    console.log("hello everyone ..."+productData.title);
     return axiosInstance.post("/products", productData);
}  

// PUT request
export const updateProduct = (productId, productData) => {
      return axiosInstance.put(`/products/${productId}`, productData);
}

// DELETE method....
export const deleteProduct = (productId) => {
       return axiosInstance.delete(`/products/${productId}`)
}