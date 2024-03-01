import React from 'react'
import {useParams} from 'react-router-dom';

const info_student = {
       stuInfo : [
         {roll_id : 101, name : "Mayuk Mukherjee", email: "Mayuk@gmail.com", phy : 99, chem : 88, math : 97},
         {roll_id : 102, name : "Suryendu Sarkar", email: "Suryendu@gmail.com", phy : 84, chem : 72, math : 91},
         {roll_id : 103, name : "Aninda Mukherjee", email: "Aninda@gmail.com", phy : 91, chem : 65, math : 94},
         {roll_id : 104, name : "Sanlap Gadai", email: "Sanlap@gmail.com", phy : 82, chem : 64, math : 79},
         {roll_id : 105, name : "Souvik Mondal", email: "Souvik@gmail.com", phy : 91, chem : 58, math : 67},
       ]
} 

 let stu_arr = info_student.stuInfo;
    for(let i = 0; i < stu_arr.length; i++){
            stu_arr[i].total = stu_arr[i].phy + stu_arr[i].chem + stu_arr[i].math;
    }   

function UserProfile() {
    const {stu_roll} = useParams();
    console.log(stu_roll);
    const student = info_student.stuInfo.find((stu) => stu.roll_id === parseInt(stu_roll));
    console.log(student);
  return (
    <div>
        <h3>UserList page is executing....</h3>
        {
            student? 
            (<div>
                <h3>name is : {student.name}</h3>
                <h3>email is : {student.email}</h3>
                <h3>marks in physics is : {student.phy}</h3>
                <h3>marks in chemistry is : {student.chem}</h3>
                <h3>marks in mathematics is : {student.math}</h3>
                <h3>Total marks is : {student.total}</h3>
            </div>) : (
                <p>User not found..</p>
            )
        }
    </div>
  )
}

export default UserProfile
