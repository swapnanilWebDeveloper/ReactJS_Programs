import logo from './logo.svg';
import './App.css';
import ReusableButton from './ReusableButton';
import ReusableList from './ReusableList';

function App() {
  const handleButtononClick = () => {
        console.log("Button Clicked");
  }

  const countries = ["USA", "Canada", "India", "UK", "Astralia", "Germany"];
  return (
    <div className="App">
       <h3>Re usable functional component</h3>
       <ReusableButton text = "click me" onClick={handleButtononClick}/>
       <ReusableButton text = "submit" onClick={handleButtononClick}/>
       <ReusableList items={countries}/>
    </div>
  );
}

export default App;
