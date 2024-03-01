import React from 'react'

function FetchApi() {
    fetch('https://dummyjson.com/products/17')
        .then((res)=> {
            return res.json()
        })
        .then((data) => {
            console.log(data);
        });
    return (
        <div>

        </div>
    )
}

export default FetchApi
