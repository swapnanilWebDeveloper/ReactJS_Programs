import React, { useEffect, useState } from 'react'
import { getProducts, createProduct, updateProduct, deleteProduct } from './LocalAPI'

function GetDataAPI() {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
        title: "",
        price: "",
        stock: "",
        rating: "",
        brand: "",
        category: "",
    });

    // GET request
    useEffect(() => {
        getProducts()
            .then((response) => {
                setProducts(response.data.products);
                console.log(response)
                console.log(response.data)
                console.log(response.data.products)
            })
            .catch((error) => {
                console.log("Error geting api data...." + error);
            })
    }, [])

    // Update product
    const handleUpdateProduct = (productId, updateData) => {
        updateProduct(productId, updateData)
            .then((response) => {
                const updateProducts = products.map((prod) =>
                    prod.id === productId ? response.data : prod
                );
                setProducts(updateProducts);
                console.log(updateProducts);
            })
            .catch((error) => {
                console.log("error updating API ......." + error);
            })
    }

    // DELETE product
    const handleDeleteProduct = (productId) => {
        deleteProduct(productId)
            .then((rest_product) => {
                const updateProducts = products.filter((prod) => prod.id !== productId)
                setProducts(updateProducts);
                console.log(rest_product);
            })
            .catch((error) => {
                console.log("Error deleting product API ....." + error);
            })
    }

    // create product
    const handleCreateProduct = () => {
        createProduct(newProduct)
        .then((response) => {
            console.log(response)
            console.log(response.data)
            setProducts([...products, response.data]);
            setNewProduct({ 
                title: "",
                price: "",
                stock: "",
                rating: "",
                brand: "",
                category: "",
            })
        })
        .catch((error) => {
                console.log("Error creating the product......" + error);
        })
    }
    return (
        <div>
            <h4>get data api method is executing....</h4>
            <h3>Posts....</h3>
            <ul>
                {
                    products.map((prod) => (
                        <li key={prod.id}>
                            <h4>product number : {prod.id}</h4>
                            <h4>title is : {prod.title}</h4>
                            <h4>price is : {prod.price}</h4>
                            <h4>stock is : {prod.stock}</h4>
                            <h4>rating is : {prod.rating}</h4>
                            <h4>brand is : {prod.brand}</h4>
                            <h4>category is : {prod.category}</h4>
                            <button onClick={() => handleUpdateProduct(prod.id, {
                                title: "french fries with chese",
                                price: "$15",
                                stock: "244",
                                rating: "4.122",
                                brand: "MCDonalds",
                                category: "fast-food",
                            })}>update</button>
                            <button onClick={() => handleDeleteProduct(prod.id)}>delete</button>
                        </li>
                    ))
                }
            </ul>

            <hr />
            <br /><br />

            <h4>Title is :</h4><input
                placeholder="title"
                value={newProduct.title}
                onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
            />
            <h4>price is :</h4><input
                placeholder="price"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            />
            <h4>stock is :</h4><input
                placeholder="stock"
                value={newProduct.stock}
                onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
            />
            <h4>rating is :</h4><input
                placeholder="rating"
                value={newProduct.rating}
                onChange={(e) => setNewProduct({ ...newProduct, rating: e.target.value })}
            />
            <h4>brand is :</h4><input
                placeholder="brand"
                value={newProduct.brand}
                onChange={(e) => setNewProduct({ ...newProduct, brand: e.target.value })}
            />
            <h4>category is :</h4><input
                placeholder="category"
                value={newProduct.category}
                onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
            />  
            <button onClick={handleCreateProduct}>create product</button>
        </div>
    )
}

export default GetDataAPI
