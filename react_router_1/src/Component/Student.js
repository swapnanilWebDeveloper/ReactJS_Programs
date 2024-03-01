import React from 'react'

function Student(props) {
  const {name, email, physics : phy, chemistry : chem, mathematics : math, total} = props;
  console.log(props);
  return (
    <div>
         <h3>Hello from the student's page</h3>
         <h3>Name is : {name}</h3>
         <h3>Email is : {email}</h3>
         <h3>marks in physics : {phy}</h3>
         <h3>marks in chemistry : {chem}</h3>
         <h3>marks in mathematics : {math}</h3>
         <h3>total marks is : {total}</h3>
    </div>
  )
}

export default Student
