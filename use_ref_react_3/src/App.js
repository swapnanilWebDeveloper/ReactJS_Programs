import logo from './logo.svg';
import './App.css';
import React,{useRef} from "react";

function App() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const addressRef = useRef(null);
  const basicRef = useRef(null);
  const hraRef = useRef(null);
  const taRef = useRef(null);
  const pfRef = useRef(null);
  const itRef = useRef(null);

  const emp_nameRef = useRef(null);
  const emp_emailRef = useRef(null);
  const emp_addressRef = useRef(null);
  const emp_basicRef = useRef(null);
  const emp_hraRef = useRef(null);
  const emp_taRef = useRef(null);
  const emp_pfRef = useRef(null);
  const emp_itRef = useRef(null);
  const emp_netSalaryRef = useRef(null);

  const data_analyse = () => {
      emp_nameRef.current.innerHTML = emp_nameRef.current.innerHTML + " " +nameRef.current.value;
      emp_emailRef.current.innerHTML = emp_emailRef.current.innerHTML +" "+ emailRef.current.value;
      emp_addressRef.current.innerHTML = emp_addressRef.current.innerHTML +" "+ addressRef.current.value;

      emp_basicRef.current.innerHTML = emp_basicRef.current.innerHTML +" "+ basicRef.current.value;
      emp_hraRef.current.innerHTML = emp_hraRef.current.innerHTML +" "+ hraRef.current.value;
      emp_taRef.current.innerHTML = emp_taRef.current.innerHTML +" "+ taRef.current.value;
      emp_pfRef.current.innerHTML = emp_pfRef.current.innerHTML +" "+ pfRef.current.value;
      emp_itRef.current.innerHTML = emp_itRef.current.innerHTML +" "+ itRef.current.value;
      emp_netSalaryRef.current.innerHTML = emp_netSalaryRef.current.innerHTML 
                                                      + ( + Number(basicRef.current.value) + Number(hraRef.current.value) 
                                                        + Number(taRef.current.value)
                                                        - Number(pfRef.current.value) 
                                                        - Number(itRef.current.value) );
  }

  return (
    <div className="App">
       <h3>Use ref in react</h3>

       <h4>Name : <input type="text" 
                         ref={nameRef} /></h4>
        
      <h4>Email : <input type="text" 
                         ref={emailRef} /></h4>

      <h4>Address : <input type="text" 
                         ref={addressRef} /></h4>

      <h4>Basic : <input type="text" 
                         ref={basicRef} /></h4>

      <h4>HRA : <input type="text" 
                         ref={hraRef} /></h4>

      <h4>TA : <input type="text" 
                         ref={taRef} /></h4>

      <h4>PF : <input type="text" 
                         ref={pfRef} /></h4>

       <h4>IT : <input type="text" 
                         ref={itRef} /></h4>

        <button onClick={() => data_analyse()}>calculate net salary</button>

        <h3 ref={emp_nameRef}>Name is : </h3>
        <h3 ref={emp_emailRef}>email is : </h3>
        <h3 ref={emp_addressRef}>address is : </h3>
        <h3 ref={emp_basicRef}>basic is : </h3>
        <h3 ref={emp_hraRef}>HRA is : </h3>
        <h3 ref={emp_taRef}>TA is : </h3>
        <h3 ref={emp_pfRef}>PF is : </h3>
        <h3 ref={emp_itRef}>IT is : </h3>
        <h3 ref={emp_netSalaryRef}>netSalary is : </h3>
    </div>
  );
}

export default App;
