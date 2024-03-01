import logo from './logo.svg';
import './App.css';
import React,{useRef} from "react";

function App() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const addressRef = useRef(null);
  const physicsRef = useRef(null);
  const chemistryRef = useRef(null);
  const mathematicsRef = useRef(null);

  const name_ref = useRef(null);
  const email_ref = useRef(null);
  const address_ref = useRef(null);
  const physics_ref = useRef(null);
  const chemistry_ref = useRef(null);
  const mathematics_ref = useRef(null);
  const total_ref = useRef(null);


  const collect_info = () => {
       name_ref.current.innerHTML =  name_ref.current.innerHTML + " " + nameRef.current.value;
       email_ref.current.innerHTML =  email_ref.current.innerHTML + " " + emailRef.current.value;
       address_ref.current.innerHTML =  address_ref.current.innerHTML + " " + addressRef.current.value;
       physics_ref.current.innerHTML =  physics_ref.current.innerHTML + " " + physicsRef.current.value;
       chemistry_ref.current.innerHTML =  chemistry_ref.current.innerHTML + " " + chemistryRef.current.value;
       mathematics_ref.current.innerHTML =  mathematics_ref.current.innerHTML + " " + mathematicsRef.current.value;
       total_ref.current.innerHTML = total_ref.current.innerHTML + " "
                                     +(+ Number(physicsRef.current.value) 
                                     + Number(chemistryRef.current.value)
                                     + Number(mathematicsRef.current.value));
  } 

  return (
    <div className="App">
       <h3>Use Ref in React</h3>

       <h4>Name : 
       <input type="text" ref={nameRef} /></h4>

       <h4>Email : 
       <input type="text" ref={emailRef} /></h4>

       <h4>Address : 
       <input type="text" ref={addressRef} /></h4>

       <h4>Physics : 
       <input type="text" ref={physicsRef} /></h4>

       <h4>chemistry : 
       <input type="text" ref={chemistryRef} /></h4>

       <h4>mathematics : 
       <input type="text" ref={mathematicsRef} /></h4>

       <button onClick={() => collect_info()}>analyise information</button>

       <h3 ref={name_ref}>Name is : </h3>
       <h3 ref={email_ref}>Email is : </h3>
       <h3 ref={address_ref}>Address is : </h3>
       <h3 ref={physics_ref}>Physics is : </h3>
       <h3 ref={chemistry_ref}>chemistry is : </h3>
       <h3 ref={mathematics_ref}>mathematics is : </h3>
       <h3 ref={total_ref}>Total marks is : </h3>
    </div>
  );
}

export default App;
