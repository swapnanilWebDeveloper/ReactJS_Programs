import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useState } from 'react';

function GetURLParams() {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("name"));
    console.log(searchParams.get("email"));
    console.log(searchParams.get("address"));
   // console.log(searchParams.get("phy"));

    // student array of objects...
    const studentData = [
        {name : "Mayuk Mukherjee",  address : "Barendranagar", email : "Mayuk@gmail.com", physics : 99, chemistry : 88, mathematics : 97},
        {name : "Suryendu Sarkar",  address : "Thanapara", email : "Suryendu@gmail.com", physics : 84, chemistry : 75, mathematics : 91},
        {name : "Aninda Mukherjee",  address : "Chatterjee para", email : "Aninda@gmail.com", physics : 91, chemistry : 69, mathematics : 87},
        {name : "Sanlap Gadai",  address : "Rail gate", email : "Sanlap@gmail.com", physics : 94, chemistry : 79, mathematics : 92},
        {name : "Souvik Chatterjee",  address : "Biswas para", email : "Souvik@gmail.com", physics : 85, chemistry : 71, mathematics : 88},
    ]
    let stuName = searchParams.get("name");
    let stuAddress = searchParams.get("address");
    let stuEmail = searchParams.get("email");
    let stuPhy = searchParams.get("phy");
    let stuChem = searchParams.get("chem");
    let stuMath = searchParams.get("math");
    let stuTotal = searchParams.get("total"); 

    const [num, setNum] = useState(0);

    const Student_Information = (indicator) => {
        setSearchParams({
            name : studentData[num].name,
            address : studentData[num].address,
            email : studentData[num].email,
            phy : studentData[num].physics,
            chem : studentData[num].chemistry,
            math : studentData[num].mathematics,
            total : Number(studentData[num].physics) + Number(studentData[num].chemistry) + Number(studentData[num].mathematics)
         })
    }
    const next_student = () => {
        Student_Information();
        if(num < 4){
            setNum(num + 1); 
         }
         else{
            alert("No next student is available...!!!");
         }
    }

    const previous_student = () => {
        Student_Information();
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
       <h3>Name is : {stuName}</h3>
       <h3>Email is : {stuEmail}</h3>
       <h3>Address is : {stuAddress}</h3>
       <h3>marks in physics : {stuPhy}</h3>
       <h3>marks in chemistry : {stuChem}</h3>
       <h3>marks in mathematics : {stuMath}</h3>
       <h3>total marks is : {stuTotal}</h3> 

       <button onClick={() => next_student()}>next student</button>
       <button onClick={() => previous_student()}>previous student</button>
    </div>
  )
}

export default GetURLParams
