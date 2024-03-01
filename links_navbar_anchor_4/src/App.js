import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Student from './Component/Student';
import Mobile from './Component/Mobile';
import Laptop from './Component/Laptop';
import Navbar from './Component/Navbar';
import {useState} from "react";

function App() {
  const studentData = [
      {name : "Mayuk Mukherjee", email : "Mayuk@gmail.com", physics : 99, chemistry : 88, mathematics : 97},
      {name : "Suryendu Sarkar", email : "Sarkar@gmail.com", physics : 84, chemistry : 68, mathematics : 91},
      {name : "Aninda Mukherjee", email : "Aninda@gmail.com", physics : 91, chemistry : 75, mathematics : 86},
      {name : "Sanlap Gadai", email : "Sanlap@gmail.com", physics : 82, chemistry : 69, mathematics : 92},
      {name : "Souvik Chatterjee", email : "Souvik@gmail.com", physics : 74, chemistry : 84, mathematics : 69},
  ];

  const mobileData = [
      {title : "galaxy pro 8", brand : "samsung", base : 7500, disc_percentage : 10 },
      {title : "redmi 9 prime", brand : "redmi", base : 12500, disc_percentage : 6 },
      {title : "realme 8 ultra", brand : "realme", base : 22750, disc_percentage : 13 },
      {title : "Lava 8 Max", brand : "Lava", base : 8850, disc_percentage : 9 },
      {title : "apple 12 supreme", brand : "apple", base : 65500, disc_percentage : 21 },
  ];

  const laptopData = [
    {title : "HP i3 10th gen", brand : "HP", base : 75000, GST : 1050, VAT : 3500 },
    {title : "Lenovo 12th gen", brand : "Lenovo", base : 125000, GST : 4350 , VAT : 4500},
    {title : "Dell ultra pro", brand : "Dell", base : 85000, GST : 1350, VAT : 2500 },
    {title : "Asus alpha genZ", brand : "Asus", base : 58500, GST : 1950 , VAT : 5500},
    {title : "Risen Seven", brand : "Risen", base : 65500, GST : 2170 , VAT : 7500 },
];

  const [num, setNum] = useState(0);

  studentData[num].total = studentData[num].physics + studentData[num].chemistry + studentData[num].mathematics;

  mobileData[num].netPrice = (mobileData[num].base) - (mobileData[num].disc_percentage / 100 );

  laptopData[num].total_price = (laptopData[num].base) + (laptopData[num].GST) + (laptopData[num].VAT);

  const next_item = () => {
    if(num < 4){
      setNum(num + 1);
    }
    else{
      alert("next is not available");
    }
  }

  const previous_item = () => {
    if(num > 0){
      setNum(num - 1);
    }
    else{
      alert("previuos is not available");
    }
  }
  return (
    <div className="App">
       <h3>Links, navbar, anchor tags....4</h3>

       <BrowserRouter>
          <Navbar />
             <Routes>
                 <Route path="/student_page"
                  element={<Student
                     stu_name = {studentData[num].name}
                     stu_email = {studentData[num].email}
                     stu_physics = {studentData[num].physics}
                     stu_chemistry = {studentData[num].chemistry}
                     stu_mathematics = {studentData[num].mathematics}
                     stu_total = {studentData[num].total}
                    />} />
                 <Route path="/mobile_page"
                  element={<Mobile 
                       mob_title = {mobileData[num].title}
                       mob_brand = {mobileData[num].brand}
                       mob_base = {mobileData[num].base}
                       mob_disc_percentage = {mobileData[num].disc_percentage}
                       mob_netPrice = {mobileData[num].netPrice}
                    />}
                   />
                 <Route path="/laptop_page"
                      element={<Laptop
                        laptop_title = {laptopData[num].title}
                        laptop_brand = {laptopData[num].brand}
                        laptop_base = {laptopData[num].base}
                        laptop_GST = {laptopData[num].GST}
                        laptop_VAT = {laptopData[num].VAT}
                        laptop_total_price = {laptopData[num].total_price}
                        />} />
             </Routes>
       </BrowserRouter>

       <button onClick={() => next_item()}>click to next</button>
       <button onClick={() => previous_item()}>click to previuos</button>
    </div>
  );
}

export default App;
