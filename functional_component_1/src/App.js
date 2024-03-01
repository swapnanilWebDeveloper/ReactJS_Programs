import logo from './logo.svg';
import './App.css';
import { College,Degree } from './College';
import { Skills, Subjects } from './Skills';
import End from './End';

function App() {
  return (
    <div className="App">
       <h1>I am swapnanil Roy</h1>
       <College/>
       <Degree/>
       <Skills/>
       <Subjects/>
       <End/>
    </div>
  );
}

export default App;
