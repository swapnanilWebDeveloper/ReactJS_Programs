import React,{useId, useRef} from 'react'

function Email() {
    const id = useId();
    const emailRef = useRef();
    const nameRef = useRef();

    const email_ref = useRef();
    const name_ref = useRef();

    const get_data = () => {
        email_ref.current.innerHTML = email_ref.current.innerHTML + emailRef.current.value;
        name_ref.current.innerHTML = name_ref.current.innerHTML + nameRef.current.value;
    }
  return (
    <div>
        <label htmlFor={`${id}-email`}>Email : </label>
        <input type="text" id={`${id}-email`} ref={emailRef} autoComplete="off" />
         
        <br />
        <br />

        <label htmlFor={`${id}-name`}>Name : </label>
      <input type="text" id={`${id}-name`}  ref={nameRef} autoComplete="off" />
        
          <button onClick={() => get_data()}> click to show data</button>

        <h4 ref={email_ref}>email is :</h4>
        <h4 ref={name_ref}>name is :</h4>  
    </div>
  )
}

export default Email
