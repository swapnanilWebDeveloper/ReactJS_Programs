import logo from './logo.svg';
import './App.css';

function App() {
   let duration = 3;

  const course = (degree, program) =>{
       duration = 4;
       let college = "Brainware University";
       
       console.log("college = "+college+", program = "+program+", degree = "+degree+", duration = "+duration);
  }  

  const fav_movies = () => {
      console.log("my favourite movie is = Avengers endgame");
  }

  const calc_CGPA = (electronics, comp_arc, cpp, numerics) => {
        let total, CGPA;
        total = electronics + comp_arc + cpp + numerics;
        CGPA = (total / 4) / 10 ;
        console.log("matrks in electronics = "+electronics+", computer architecture = "
                       +comp_arc+", cpp = "+cpp+", numerics = "+numerics);
        console.log("CGPA is = "+CGPA);
  }

  const calc_salary = (basic,HRA,TA,PF,IT) => {
      let total;
      total = basic + HRA + TA - PF - IT;
      console.log("BAsic = "+basic+", HRA = "+HRA+", TA = "+TA+", PF = "+PF+", IT = "+IT);
      console.log("net salary is = "+total);
  }
  return (
    <div className="App">
      <h1>Hello , IIT students .... welcome</h1>
      <button onClick={() => { course("Graduation", "BCA")}}>click course</button>
      <button onClick={() => { console.log("Good evening to all of you...")}}>click greetings</button>
      <button onClick={() => { fav_movies()}}>click movies</button>
      <button onClick={() => { calc_CGPA(92, 88, 84,74)}}>click CGPA</button>
      <button onClick={() => { calc_salary(45000,5500,6500,8500,4500)}}>click salary</button>
    </div>
  );
}

export default App;
