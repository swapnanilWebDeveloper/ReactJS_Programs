import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
       <h3>links , navbar , anchor tags......</h3>
       
       <Navbar />
       <BrowserRouter>
           <Routes>
            { /* <Route path="/home" element={<Home />} /> */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
           </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
