import React from 'react'

export function Student(props) {
      const {Name, emailAddress : email_id, add, physics : phy, chemistry : chem, mathematics : math, sumation : sum} = props;

      const student_marks = {
          student_name : Name,
          total : phy + chem + math
      }
      console.log(student_marks);
  return (
    <div> 
        <h1>Props in functional component</h1>
        <h3>name is : {Name}</h3>
        <h3>email is : {email_id}</h3>
        <h3>address is : {add}</h3>
        <h3>marks in physics : {phy}</h3>
        <h3>marks in chemistry is : {chem}</h3>
        <h3>marks in mathematics : {math}</h3>
        <h3>Total marks in science = {sum}</h3>
    </div>
  )
}
