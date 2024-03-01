import {useState} from 'react'

function useCounter(initialIndex=0, forward=1, backward= -1) {
      const [ind, setInd] = useState(initialIndex);

      const studentData = [
         {name: "Mayuk Mukherjee", email : "Mayuk@gmail.com", address : "Barendranagar", phy : 99, chem : 88, math : 97},
         {name: "Suryendu Sarkar", email : "Suryendu@gmail.com", address : "Thanapara", phy : 84, chem : 65, math : 91},
         {name: "Aninda Mukherjee", email : "Aninda@gmail.com", address : "Biswaspara", phy : 92, chem : 78, math : 82},
         {name: "Sanlap Gadai", email : "Sanlap@gmail.com", address : "Rail-gate", phy : 90, chem : 69, math : 88},
         {name: "Souvik Mondal", email : "Souvik@gmail.com", address : "lavela more", phy : 78, chem : 84, math : 92},
         {name: "Anik Das", email : "Anik@gmail.com", address : "chabi gate", phy : 89, chem : 63, math : 86},
      ]

      studentData[ind].total = studentData[ind].phy + studentData[ind].chem + studentData[ind].chem;

      let data_student = studentData[ind];

      const next_student = () =>{
        if(ind < 5){
            setInd(ind + forward);
        }
        else{
            alert("no more next student available.....");
        }
      }

      const previous_student = () => {
        if(ind > 0){
            setInd(ind + backward);
        }
        else{
            alert("no previous student available.....");
        }
      }

      return {data_student, next_student, previous_student, ind}
}

export default useCounter
