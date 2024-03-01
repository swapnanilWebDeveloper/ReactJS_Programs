import React from 'react'

export default function ChildrenCmponentA({sharedState,handleChange}) {

    const handleInputChange = (event) =>{
        const newValue = event.target.value;
        handleChange(newValue);
    }
  return (
    <div>
        <input type="text" value={sharedState} onChange={handleInputChange} />
    </div>
  )
}
