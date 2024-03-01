import logo from './logo.svg';
import './App.css';
import React, {useState, useRef, useLayoutEffect} from "react"

function App() {
  const [width, setWidth] = useState(0);  

  const elementRef = useRef(null);

  useLayoutEffect( () => {

       if(elementRef.current){
            setWidth(elementRef.current.getBoundingClientRect().width);
       }
  },[width])
  return (
    <div className="App">
       <h3>use layout effect hook1 in react....</h3>
       <h3>Width measurement example...</h3>

       <div
       ref={elementRef}
       style={{
                    width : "300px", 
                    background: "lightblue",
                    marginLeft : "80px"
                  }}>
                  Element whose width is measured
        </div>

      <p>width : {width}px</p>
          
    </div>
  );
}

export default App;
