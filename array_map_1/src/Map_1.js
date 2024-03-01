import React from 'react';
import "./App.css";

const ProductList = () => {
    const products = [
        { name: 'Product 1', price: 10 },
        { name: 'Product 2', price: 20 },
        { name: 'Product 3', price: 30 },
    ];
    return (
        <div className='Map_1'>
            <ul>
                {products.map((product, index) => (
                    <div key={index}>
                        <li>{product.name}</li>
                        <li>Price: ${product.price}</li>
                    </div>
                ))}
            </ul>
        </div>
    );
};
export default ProductList;