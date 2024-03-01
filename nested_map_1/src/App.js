import logo from './logo.svg';
import './App.css';
import {Table, Container, Row, Col} from "react-bootstrap";

function App() {
  const countriesWithCities = [
    {
      country : "USA",
      cities : ["NewYork", "Los Angeles", "Chicago"],
    },
    {
      country : "Canada",
      cities : ["Toronto", "Vancouver", "Montreal"],
    },
    {
      country : "Japan",
      cities : ["Tokyo", "Nagoya", "Shibuya"],
    },
    {
      country : "UK",
      cities : ["London", "Manchester", "Barmingham"],
    },
  ];

  const nestedData = [
     {category : "Fruits", items: ["Apple", "Banana", "Orange"]},
     {category : "Vegetables", items: ["carrot", "Brokoli", "Spinach"]},
     {category : "Drinks", items: ["Water", "juice", "Tea", "Coffie"]},
  ]
  return (
    <div className="App">
        <h2>Nested map in react</h2>
         <ul>
            {countriesWithCities.map((countryObj, index) => (
               <li key={index}>
                 <b>{countryObj.country}</b>
                   <ul>
                       {countryObj.cities.map((city,cityIndex) => (
                           <li key={cityIndex}>{city}</li>
                       ))}
                   </ul>
                   
               </li>
            ))}
         </ul> 

        <Container>
            <Row>
               <Col>
                   <Table className="table">
                             <thead>
                                  <tr>
                                       <th>category</th>
                                       <th>items</th>
                                  </tr>
                             </thead>
                             <tbody>
                                 {nestedData.map((data,index) => (
                                    <tr key={index}>
                                       <td>{data.category}</td>
                                       <td>
                                          <ul className='list-unstyled'>
                                              {data.items.map((item,itemIndex) => (
                                                  <li key={itemIndex}>{item}</li>
                                              ))}
                                          </ul>
                                       </td>
                                    </tr>
                                 ))}
                             </tbody>
                   </Table>
               </Col>
            </Row>
        </Container>
    </div>
  );
}

export default App;
