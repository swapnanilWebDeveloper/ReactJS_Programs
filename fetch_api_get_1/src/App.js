import logo from './logo.svg';
import './App.css';
import GetMethod from './GetMethod';

function App() {

 /* fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => 
             {
               return response.json()
             })
      .then((data) => 
             {
               console.log(data);
             })
      .catch((err) => 
        {
            console.log("something went wrong !!! "+err)
        })
         */
  return (
    <div className="App">
       <h3>fetch api in react 1.....</h3>
       <GetMethod />
    </div>
  );
}

export default App;
