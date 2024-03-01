import React, {forwardRef,useRef, useImperativeHandle} from 'react'

function ChildComponent(props,mayuk) {
    const myNameRef = useRef();
    const myEmailRef = useRef();
    const myAddressRef = useRef();
    const myPhyRef = useRef();
    const myChemRef = useRef();
    const myMathRef = useRef();

    const stuNameRef = useRef();
    const stuEmailRef = useRef();
    const stuAddressRef = useRef();
    const stuPhyRef = useRef();
    const stuChemRef = useRef();
    const stuMathRef = useRef();
    const stuTotalRef = useRef();

    const handleChildButtonClick = () => {
          console.log("child button clicked");
          console.log(mayuk.current.value); 
    }

    const handleChildButtonClick_two = () => {
        console.log("child twice clicked");
        stuNameRef.current.innerHTML = stuNameRef.current.innerHTML + " " + myNameRef.current.value;
        stuEmailRef.current.innerHTML = stuEmailRef.current.innerHTML + " " + myEmailRef.current.value;
        stuAddressRef.current.innerHTML = stuAddressRef.current.innerHTML + " " + myAddressRef.current.value;
        stuPhyRef.current.innerHTML = stuPhyRef.current.innerHTML + " " + myPhyRef.current.value;
        stuChemRef.current.innerHTML = stuChemRef.current.innerHTML + " " + myChemRef.current.value;
        stuMathRef.current.innerHTML = stuMathRef.current.innerHTML + " " + myMathRef.current.value;
        stuTotalRef.current.innerHTML = stuTotalRef.current.innerHTML + " "
                                                    +( + Number(myPhyRef.current.value)
                                                       + Number(myChemRef.current.value)
                                                       + Number(myMathRef.current.value)
                                                      );
  }

    useImperativeHandle(mayuk, () => ({
        handleChildButtonClick,
        handleChildButtonClick_two,
    }))
  return (
    <div>
        <h3>ChildComponent in Executing</h3> 
        <h3>name : <input type="text" ref={myNameRef}/></h3>
        
        <h3>email : <input type="text" ref={myEmailRef}/></h3>

        <h3>address : <input type="text" ref={myAddressRef}/></h3>

        <h3>physics : <input type="text" ref={myPhyRef}/></h3>

        <h3>chemistry : <input type="text" ref={myChemRef}/></h3>
        
        <h3>mathematics : <input type="text" ref={myMathRef}/></h3>

        <h4 ref={stuNameRef}>name : </h4>
        <h4 ref={stuEmailRef}>Email : </h4>
        <h4 ref={stuAddressRef}>Address : </h4>
        <h4 ref={stuPhyRef}>Physics : </h4>
        <h4 ref={stuChemRef}>chemistry : </h4>
        <h4 ref={stuMathRef}>mathematics : </h4>
        <h4 ref={stuTotalRef}>Total : </h4>
    </div>
  )
}

export default forwardRef(ChildComponent);