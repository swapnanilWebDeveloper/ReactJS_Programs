import React,{memo} from 'react'

function ChildrenComponent({increment}) {
    console.log("Children component rendered.....!!")
  return (
    <div>
         <button onClick={increment}>increment2</button>
    </div>
  )
}

export default memo(ChildrenComponent);