import React from 'react'
import { Link } from 'react-router-dom'

  const studentInfo = {
        studentData : [
            {roll_no : 101, name : "Mayuk Mukherjee"},
            {roll_no : 102, name : "Suryendu Sarkar"},
            {roll_no : 103, name : "Aninda Mukherjee"},
            {roll_no : 104, name : "Sanlap Gadai"},
            {roll_no : 105, name : "Souvik Mondal"},
        ]
  }

function UserList() {
  return (
    <div>
        <h3>UserList page is executing....</h3>
        <ul>
            {
                studentInfo.studentData.map((student) => (
                     <li key={student.roll_no}>
                         <Link to={`/student/${student.roll_no}`}>get details of {student.name}</Link>
                     </li>
                ))
            }
        </ul>
    </div>
  )
}

export default UserList
