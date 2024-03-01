import React, {forwardRef} from 'react'

function Children(props,ref) {
  return (
    <div>
        <h3>ChildComponent</h3> 
        <input type="text" ref={ref}/>
    </div>
  )
}

export default forwardRef(Children);