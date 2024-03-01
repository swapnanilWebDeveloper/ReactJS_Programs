import logo from './logo.svg';
import './App.css';
import Mobile from './Mobile';

function App() {
 
  function Hard_work(){
    return (
       <div>
           hardwork can beat talent
       </div>
    )
  }

  function Intelligence(){
      return(
        <div>
           Intelligence is needed to be a software developer
        </div>
      )
  } 

  return (
    <div className="App">
       <h1>I am here to solve the problem</h1>
       <Mobile/>
       <Hard_work/>
       {Intelligence()}
    </div>
  );
}

export default App;
