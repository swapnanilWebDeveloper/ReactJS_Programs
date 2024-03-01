import logo from './logo.svg';
import './App.css';
import User from './User';


function App() {

  function common(){
    return (
      <div>
         common Component
      </div>
    )
  }

  function Extra_comp(){
    return (
      <div>
         an extra component is being used
      </div>
    )
  }

  return (
    <div className="App">
      <h1>Hello, I am in the App() function</h1>
       <User/>
       {common()}
       <Extra_comp/>
    </div>
  );
}

export default App;
