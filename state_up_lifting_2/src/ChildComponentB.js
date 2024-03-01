import React from 'react'

export default function ChildComponentB({ sharedName, sharedEmail, sharedAddress, sharedPhysics,
    sharedChemistry, sharedMathematics, sharedTotal, consol_info }) {
        const employee_info = {
               name : "Mayuk Mukherjee",
               email : "Mayuk@gmail.com",
               address : "Barendranagar",
               company : "TCS",
               basic : 75000,
               HRA : 6500,
               TA : 8500,
               PF : 4500,
               IT : 2500
        }
    return (
        <div>
            <h3>name is : {sharedName}</h3>
            <h3>email is : {sharedEmail}</h3>
            <h3>address is : {sharedAddress}</h3>
            <h3>marks in physics : {sharedPhysics}</h3>
            <h3>marks in chemistry : {sharedChemistry}</h3>
            <h3>marks in mathematics : {sharedMathematics}</h3>
            <h3>marks in total : {sharedTotal}</h3> 
            <button onClick={() => consol_info(employee_info)}>click here</button>
        </div>
    )
}
