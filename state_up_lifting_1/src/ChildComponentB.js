import React from 'react'

export default function ChildComponentB({sharedState, alert}) {
    const data = "Bhaskar Gupta";
    const employee = { 
          name : "Mayuk Mukherjee",
          email : "Mayuk@gmail.com",
    }
  return (
    <div>
         <h3>Shared State :{sharedState}</h3>
         <button onClick={() => alert(data, employee)}>Click me</button>
    </div>
  )
}
