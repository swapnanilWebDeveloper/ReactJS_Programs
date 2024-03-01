import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Service from './Component/Service';
import  Navbar  from './Component/Nabvar';
import PageNotFound from './Component/PageNotFound';

function App() {
  return (
    <div className="App">
       <h3>links , navbar , anchor tags......</h3>
       
       <BrowserRouter>
       <Navbar />
           <Routes>
              <Route path="/home" element={<Home />} /> 
              <Route path="/about" element={<About />} />
              <Route path="/service" element={<Service />} />
             {/* <Route path="/*" element={<h3>404 error : page not found !!!</h3>} /> */}
             <Route path="/*" element={<PageNotFound />} />

           </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
