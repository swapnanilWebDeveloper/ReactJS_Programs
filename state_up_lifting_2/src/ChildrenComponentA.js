import React from 'react'

export default function ChildrenComponentA({sharedName,sharedEmail,sharedAddress,sharedPhysics,
                                                    sharedChemistry,sharedMathematics,sharedTotal,changeInformation}) {

            const change_info = () => {
                 const newName = "Aninda Mukherjee";
                 const newEmail = "Aninda@gmail.com";
                 const newAddress = "Biswas para";
                 const newPhysics = 88;
                 const newChemistry = 74;
                 const newMathematics = 92;
                 changeInformation(newName,newEmail,newAddress, newPhysics, newChemistry, newMathematics);
            }
  return (
    <div>
        <button onClick={change_info}>click here</button>
    </div>
  )
}
