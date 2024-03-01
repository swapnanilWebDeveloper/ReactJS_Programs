import React, {forwardRef, useImperativeHandle} from 'react'

function ChildComponent(props,mayuk) {
   // const childRef = useRef();

    const handleChildButtonClick = () => {
          console.log("child button clicked");
    }

    useImperativeHandle(mayuk, () => ({
        handleChildButtonClick,
    }))
  return (
    <div>
        <h3>ChildComponent in Action Mode</h3> 
        {/* <input type="text" ref={ref}/> */}

        {/* <button ref={childRef}>click here</button> */}
    </div>
  )
}

export default forwardRef(ChildComponent);