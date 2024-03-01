import React from 'react';
import useCounter from './useCounter';

function CounterComponent() {
    const {data_student, next_student: nextStu, previous_student : prevStu} = useCounter();

    console.log(data_student);
  return (
    <div>
        <p>name is : {data_student.name}</p>
         <p>email is : {data_student.email}</p>
         <p>address is : {data_student.address}</p>
         <p>marks in physics : {data_student.phy}</p>
         <p>marks in chemsitry : {data_student.chem}</p>
         <p>marks in mathematics : {data_student.math}</p>
         <p>total marks is : {data_student.total}</p>
         
         <button onClick={()=> nextStu()}>next student</button>
         <button onClick={() => prevStu()}>previous student</button>
    </div>
  )
}

export default CounterComponent
