import React,{forwardRef} from 'react'

function ChildComponent(props,ref_data) {
  return (
    <div>
       <h3>Child component is executing</h3>

       <input type="text" ref={ref_data}/>
    </div>
  )
}

export default forwardRef(ChildComponent)