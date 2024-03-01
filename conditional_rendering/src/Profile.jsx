import React from 'react'

export default function Profile() {
    const isLoggedin = true;

    const items = ["Apple", "Banana", "Orange"];

    const isAuthenticate = true;
  return (
    <>
    <div>
    {isLoggedin ?  <h2>welcome user </h2> :  <h2>welcome Guest</h2>}
    
    <div>{items.length > 0 ? (
        <ul>
            {
                items.map((item, index) => (
                    <li key = {index}>{item}</li>
                ))
            }
        </ul>
       ) : (
        <p>No items to display</p>
        )}</div>
    </div>

    <div>{isAuthenticate && 
        <button onClick={() => console.log("Logged out")}>Logout</button>
     }</div>
    </>   
  )
}
