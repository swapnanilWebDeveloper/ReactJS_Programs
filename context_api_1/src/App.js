import logo from './logo.svg';
import './App.css';
import Child1 from './Child1';
import React,{createContext} from "react"

const MyContext = createContext();
const MyContextNew = createContext();

function App() {
  const shareData = "Hello parent...!!"
  const shareDataNew = "Multiple Entry";

  return (
    <div className="App">
       <MyContext.Provider value={shareData}>
          <MyContextNew.Provider value={shareDataNew}>
          <h3>UseContext api is executing.....</h3>

          <Child1 />
          </MyContextNew.Provider>
       </MyContext.Provider>
    </div>
  );
}

export default App;
export {MyContext, MyContextNew}
