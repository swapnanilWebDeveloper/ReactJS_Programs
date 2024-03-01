import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useState } from 'react';

function GetURLParams() {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("name"));
    console.log(searchParams.get("email"));
    console.log(searchParams.get("address"));

    // student array of objects.....
    const employeeData = [
        {name : "Mayuk Mukherjee",  address : "Barendranagar", email : "Mayuk@gmail.com", basic : 75000, HRA : 8500, TA : 6500, PF : 4500, IT : 3500},
        {name : "Suryendu Sarkar",  address : "Thanapara", email : "Suryendu@gmail.com", basic : 55000, HRA : 4500, TA : 3500, PF : 6500, IT : 7500},
        {name : "Aninda Mukherjee",  address : "Chatterjee para", email : "Aninda@gmail.com", basic : 95000, HRA : 3500, TA : 6500, PF : 4800, IT : 3900},
        {name : "Sanlap Gadai",  address : "Rail gate", email : "Sanlap@gmail.com", basic : 65000, HRA : 7900, TA : 9200, PF : 8800, IT : 5500},
        {name : "Souvik Chatterjee",  address : "Biswas para", email : "Souvik@gmail.com", basic : 85000, HRA : 7100, TA : 8800, PF : 4300, IT : 3400},
    ]
    let empName = searchParams.get("name");
    let empAddress = searchParams.get("address");
    let empEmail = searchParams.get("email");
    let empBaic = searchParams.get("basic");
    let empHRA = searchParams.get("HRA");
    let empTA = searchParams.get("TA");
    let empPF = searchParams.get("PF"); 
    let empIT = searchParams.get("IT");
    let empNetSal = searchParams.get("netSal");

    const [num, setNum] = useState(0);

    const Employee_Information = (indicator) => {
        setSearchParams({
            name : employeeData[num].name,
            address : employeeData[num].address,
            email : employeeData[num].email,
            basic : employeeData[num].basic,
            HRA : employeeData[num].HRA,
            TA : employeeData[num].TA,
            PF : employeeData[num].PF,
            IT : employeeData[num].IT,
            netSal : Number(employeeData[num].basic) + Number(employeeData[num].HRA) + Number(employeeData[num].TA)
                      - Number(employeeData[num].PF) - Number(employeeData[num].IT)
         })
    }
    const next_employee = () => {
        Employee_Information();
        if(num < 4){
            setNum(num + 1); 
         }
         else{
            alert("No next student is available...!!!");
         }
    }

    const previous_employee = () => {
        Employee_Information();
        if(num > 0){
           setNum(num - 1);
        }
        else{
           alert("No previous student is available...!!!");
        }
   }
  return (
    <div>
       <h3>get the url data here</h3>
       <h3>Name is : {empName}</h3>
       <h3>Email is : {empEmail}</h3>
       <h3>Address is : {empAddress}</h3>
       <h3>basic salary is : {empBaic}</h3>
       <h3>HRA is : {empHRA}</h3>
       <h3>TA is : {empTA}</h3>
       <h3>PF is : {empPF}</h3> 
       <h3>IT is : {empIT}</h3>
       <h3>net salary is : {empNetSal}</h3>

       <button onClick={() => next_employee()}>next employee</button>
       <button onClick={() => previous_employee()}>previous employee</button>
    </div>
  )
}

export default GetURLParams
