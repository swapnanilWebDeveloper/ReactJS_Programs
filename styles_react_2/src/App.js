import logo from './logo.svg';
import './App.css';

import "./style.css";

import Design_art from './style.module.css';

import "./style.scss"

function App() {
  const style_obj = {
        color : "blue",
        backgroundColor : "yellow",
        border : "10px solid red",
        borderRadius : "12px",
        width : "400px",
        height : "80px",
        marginLeft : "100px",
        paddingTop : "30px" 
  }
  return (
    <div className="App">
        <h1>Different styles in react</h1>

        {/* Inline CSS method */}
        <h3 style={{
          color : "yellow", 
          backgroundColor : "green",
          width : "300px",
          height : "50px",
          border : "15px solid red",
          borderRadius : "8px",
          marginLeft : "190px",
          paddingTop : "20px",
        }}>Inline CSS method</h3>

        {/* Normal CSS */}
        <h3 className="Demo_test">Normal CSS method...</h3>

        {/* CSS in Javascript */}
        <h3 style={style_obj}>CSS in Javascript method</h3>

        {/* CSS Module */}
        <h3 className={Design_art.design_module}>CSS Module</h3>

        {/* Sass Scss */}
        <h3 className="design-sass">Sass and <span>Scss</span> method</h3>

    </div>
  );
}

export default App;
