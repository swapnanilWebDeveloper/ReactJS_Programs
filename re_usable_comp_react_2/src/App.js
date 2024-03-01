import logo from './logo.svg';
import './App.css';
import ReusableButton from './ReusableButton';
import ReusableList from './ReusableList';

function App() {
  const ButtonClickEvent = () => {
        console.log("Button has been clicked");
  }

  const sports = ["Swimming", "Badminton", "Table-Tennis", "Boxing", "Sprint", "Javelin","high-jump", "long-jump"];
  return (
    <div className="App">
       <h3>Re usable functional component</h3>
       <ReusableButton message = "click here" onClick={ButtonClickEvent}/>
       <ReusableButton message = "submit now" onClick={ButtonClickEvent}/>
       <ReusableList outdoor_games={sports}/>
    </div>
  );
}

export default App;
