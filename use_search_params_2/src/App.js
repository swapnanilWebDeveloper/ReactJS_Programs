import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Service from './Component/Service';
import  Navbar  from './Component/Navbar';
import PageNotFound from './Component/PageNotFound';
import GetURLParams from './Component/GetURLParams';

function App() {
  return (
    <div className="App">
       <h3>use search params 2 in react ....!!!</h3>

       <BrowserRouter>
          <Navbar/>
           <Routes>
               <Route path="/home" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/service" element={<Service />} />
               <Route path="/geturl" element={<GetURLParams />} />
               <Route path="/*" element={<PageNotFound />} />
           </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
