import logo from './logo.svg';
import './App.css';
import React, {useRef} from "react";

function App() {
   let inputRef1 = useRef(null);
   let inputRef2 = useRef(null);

   const submitForm = (e) => {
         e.preventDefault();
         console.log("First input value : "+inputRef1.current.value);
         console.log("Second input value : "+inputRef2.current.value);

         let input3 = document.getElementById("input3").value;
         console.log("Input 3 value : "+input3);
   }

  return (
    <div className="App">
      <h1>un-controlled in React</h1>

      <form onSubmit={submitForm}>
          <input type="text" ref={inputRef1} />
          <input type="text" ref={inputRef2} />
          <input type="text" id="input3" />

          <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
