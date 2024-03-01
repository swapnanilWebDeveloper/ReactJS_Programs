import React,{useId, useRef} from 'react'

function Bio_form() {
    const id = useId();

    const nameRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();
    const phyRef = useRef();
    const chemRef = useRef();
    const mathRef = useRef();

    const name_ref = useRef();
    const email_ref = useRef();
    const address_ref = useRef();
    const phy_ref = useRef();
    const chem_ref = useRef();
    const math_ref = useRef();
    const total_ref = useRef();

    const display_information = () => {
        name_ref.current.innerHTML = name_ref.current.innerHTML + "  "+ nameRef.current.value;
        email_ref.current.innerHTML = email_ref.current.innerHTML + "  "+ emailRef.current.value;
        address_ref.current.innerHTML = address_ref.current.innerHTML + "  "+ addressRef.current.value;
        phy_ref.current.innerHTML = phy_ref.current.innerHTML + "  "+ phyRef.current.value;
        chem_ref.current.innerHTML = chem_ref.current.innerHTML + "  "+ chemRef.current.value;
        math_ref.current.innerHTML = math_ref.current.innerHTML + "  "+ mathRef.current.value;

        total_ref.current.innerHTML = total_ref.current.innerHTML + "  "
                                           + ( Number(phyRef.current.value)
                                               + Number(chemRef.current.value)
                                               +Number(mathRef.current.value)
                                              );
    }
  return (
    <div>
          <label htmlFor={`${id}-name`}>Name is :</label>
          <input type="text" id={`${id}-name`} ref={nameRef} autoComplete="off"/>

          <br />
          <label htmlFor={`${id}-email`}>email is :</label>
          <input type="text" id={`${id}-email`} ref={emailRef} autoComplete="off"/>

          <br />
          <label htmlFor={`${id}-address`}>address is :</label>
          <input type="text" id={`${id}-address`} ref={addressRef} autoComplete="off"/>

          <br />
          <label htmlFor={`${id}-phy`}>marks in physics is :</label>
          <input type="text" id={`${id}-phy`} ref={phyRef} autoComplete="off"/>

          <br />
          <label htmlFor={`${id}-chem`}>marks in chemistry is :</label>
          <input type="text" id={`${id}-chem`} ref={chemRef} autoComplete="off"/>

          <br />
          <label htmlFor={`${id}-math`}>marks in mathematics is :</label>
          <input type="text" id={`${id}-math`} ref={mathRef} autoComplete="off"/>

          <button onClick={() => display_information()}>show data</button>

          {/* out put displayed in html element */}

          <h3 ref={name_ref}>name is :</h3>
          <h3 ref={email_ref}>email is :</h3>
          <h3 ref={address_ref}>address is :</h3>
          <h3 ref={phy_ref}>marks in physics is :</h3>
          <h3 ref={chem_ref}>marks in chemistry is :</h3>
          <h3 ref={math_ref}>marks in mathematics is :</h3>
          <h3 ref={total_ref}>total marks is :</h3>
    </div>
  )
}

export default Bio_form
