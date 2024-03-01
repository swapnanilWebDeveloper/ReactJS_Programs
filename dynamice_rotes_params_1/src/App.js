import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Services from './Component/Services';
import  Navbar  from './Component/Navbar';
import PageNotFound from './Component/PageNotFound';
import UserList from './Component/UserList';
import UserProfile from './Component/UserProfile';

function App() {

  return (
    <div className="App">
      <h3>dynamic routes, params in react.....</h3>

      <BrowserRouter>
          <Navbar/>
         <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/service" element={<Services />} />
              <Route path="/user" element={<UserList />} />
              <Route path="/user/:userId" element={<UserProfile />} />
              <Route path="/*" element={<PageNotFound />} />
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
