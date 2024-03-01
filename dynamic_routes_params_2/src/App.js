import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Service from './Component/Service';
import Navbar from './Component/Navbar';
import PageNotFound from './Component/PageNotFound';
import UserList from './Component/UserList';
import UserProfile from './UserProfile';

function App() {
  return (
    <div className="App">
       <h3>dynamic routes and params2......</h3>

         <BrowserRouter>
             <Navbar />
              <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/service" element={<Service />} />
                  <Route path="/student" element={<UserList />} />
                  <Route path="/student/:stu_roll" element={<UserProfile />} />
                  <Route path="/*" element={<PageNotFound />} />
              </Routes>
         </BrowserRouter>
    </div>
  );
}

export default App;
