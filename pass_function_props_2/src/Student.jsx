import React from 'react'

export default function Student(props) {
  return (
    <div>
         <h3>I am from student component</h3>
         <h3>Name : {props.stu_name}</h3>
         <h3>email : {props.stu_email}</h3>
         <h3>address : {props.stu_address}</h3>
         <h3>physics : {props.stu_physics}</h3>
         <h3>chemistry : {props.stu_chemistry}</h3>
         <h3>mathematics : {props.stu_mathematics}</h3>
         <h3>total : {props.stu_total}</h3>
         <button onClick={props.science_total}>total marks</button>
         <button onClick={props.change_student}>change student</button>
    </div>
  )
}
