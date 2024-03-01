import React from 'react'

function Student(props) {
    const {stu_name , stu_email, stu_physics : phy , stu_chemistry : chem , stu_mathematics : math, stu_total : total} = props;
  return (
    <div>
         <h3>Student page is executing...</h3>
         <h3>Name is : {stu_name}</h3>
         <h3>Email is : {stu_email}</h3>
         <h3>marks in physics : {phy}</h3>
         <h3>marks in chemistry : {chem}</h3>
         <h3>marks in mathematics : {math}</h3>
         <h3>Total marks is : {total}</h3>
    </div>
  )
}

export default Student
