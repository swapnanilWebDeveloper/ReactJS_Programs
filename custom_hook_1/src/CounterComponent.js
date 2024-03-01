import React from 'react'
import useCounter from './useCounter'

function CounterComponent() {
   const {count, increment, decrement} = useCounter();

  return (
    <div>
          <p>Count : {count} </p>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default CounterComponent
