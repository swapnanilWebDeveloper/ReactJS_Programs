import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import  Navbar  from './Component/Nabvar';
import Service from './Component/Service';
import PageNotFound from './Component/PageNotFound';
import Filter from './Component/Filter';
import Contact from './Component/Contact';
import Company from './Component/Company';
import Channel from './Component/Channel';
import Other from './Component/Other';

function App() {
  return (
    <div className="App">
       <h3>nested routing in react 1....</h3>
       
       <BrowserRouter>
       <Navbar />
           <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/service" element={<Service />} />
              <Route path="/filter" element={<Filter />} />
              <Route path="/*" element={<PageNotFound />} />
              <Route path="/contact/" element={<Contact />} >
                  <Route  path="company" element={<Company />} />
                  <Route  path="channel" element={<Channel />} />
                  <Route  path="other" element={<Other />} />
              </Route>
           </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
