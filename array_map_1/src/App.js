import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";

function App() {
  const names = ["Alice", "Bob", "CHarlie", "Bhaskar"];
  const products = [
    { id: 1, name: "product1", price: 150 },
    { id: 2, name: "product2", price: 65 },
    { id: 3, name: "product3", price: 160 },
    { id: 4, name: "product4", price: 225 }
  ]
  let [sum,setSum] = useState(0);
  let calc_total = () => {
       products.map((element,index) => {
        sum = sum + element.price;
        setSum(sum);
        console.log("hey ... watch jawan "+(index+1));
       })
  }

  const fruits = ["Apple", "Banana", "Orange", "Mango"];

  const fruitItems = fruits.map((fruit, index) => <li key={index}>name of fruit {index + 1} : {fruit}</li>)

  return (
    <div className="App">
      <h3>Array with Map function</h3>
      <ul>
        {
          names.map((value, index) => (
            <li key={index}>{value}</li>
          ))
        }
      </ul>

      <ul>
        {products.map((items, index) => (
          <div key={index}>
            <li>name : {items.name}</li>
            <li>Price: ${items.price}</li>
          </div>
        ))}
      </ul>
      <h3>Total price is = ${sum}</h3>
      <button onClick={() => calc_total()}>total price of all the products</button>
      <ul>{fruitItems}</ul>
    </div>
  );
}

export default App;
