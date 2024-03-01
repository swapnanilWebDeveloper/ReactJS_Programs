import logo from './logo.svg';
import './App.css';

import "./style.css";

import Style from "./style.module.css";

import "./style.scss"

function App() {
  const headLine = {
      color : "white",
      backgroundColor : "blue"
  };

  return (
    <div className="App">
       <h1>Styles type in React</h1>
        {/* Inline css method*/}
       <h1 style={{color : "white", backgroundColor : "green"}}>Inline method</h1>

       {/* Normal CSS */}
       <h1 className="primary">
         Normal method
       </h1>
     
       {/* CSS in JS */}
       <h1 style={headLine}>CSS in JS method</h1>

       {/* CSS Module*/}
       <h1 className={Style.title}>Css Module method</h1>

       {/* Sass and SCSS */}
       <h1 className="primary-sass">
         Sass and <span>Scss</span> method
       </h1>
    </div>
  );
}

export default App;
