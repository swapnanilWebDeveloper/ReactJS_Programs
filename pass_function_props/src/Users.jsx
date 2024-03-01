import React from 'react'

export default function Users(props) {
    console.log(props);
  return (
    <div>
        <h2>Users Component</h2>
        <button onClick={props.handleClick}>click me</button>

        <p>Count : {props.counter}</p>
        <button onClick={props.increment}>increment</button>
    </div>
  )
}
