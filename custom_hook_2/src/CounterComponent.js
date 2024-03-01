import React from 'react'
import useCounter from './useCounter'

function CounterComponent() {
    const {name, email, address, phy, chem, math, total, next_student, prev_student} = useCounter();

  return (
    <div>
          <p>Name is : {name}</p>
          <p>Email is : {email}</p>
          <p>Address is : {address}</p>
          <p>marks in Physics : {phy}</p>
          <p>marks in Chemsitry : {chem}</p>
          <p>marks in Mathematics: {math}</p>
          <p>total marks is : {total}</p>

          <button onClick={()=> next_student()}>next student</button>
          <button onClick={()=> prev_student()}>previous student</button>
    </div>
  )
}

export default CounterComponent
