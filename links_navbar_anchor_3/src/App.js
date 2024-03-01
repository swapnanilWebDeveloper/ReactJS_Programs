import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from './Component/About';
import Home from './Component/Home';
import  Navbar  from './Component/Navbar';
import Service from './Component/Service';

function App() {
  return (
    <div className="App">
      <h4>links, navbar, anchor_tags 3</h4>

      {/* <Navbar /> */}
      <BrowserRouter>
      <Navbar />
           <Routes>
               <Route path="/home" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/service" element={<Service />} />  
           </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
