import React from 'react'

export default function Example() {
    const isSubscribed = true;
    const name = "swapnanil"
    const players = ["sachin" , "sourav", "Dhoni", "gavaskar","virat", "Kumble", "Laxman"];

    const isMember = true;
  return (
    <>
    <div>
    {isSubscribed ?  <h2>welcome {name} to our website</h2> :  <h2>first subscribe to be a member</h2>}
    
    <div>{players.length > 0 ? (
        <ul>
            {
                players.map((value, index) => (
                    <li key = {index}>{value}</li>
                ))
            }
        </ul>
       ) : (
        <p>No items to display</p>
        )}</div>
    </div>

    <div>{isMember && 
        <button onClick={() => console.log("You are a member")}>membership status</button>
     }</div>
    </>   
  )
}
