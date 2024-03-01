import logo from './logo.svg';
import './App.css';
import {Table, Col, Container, Row } from 'react-bootstrap';

function App() {
  const studentInfo = [
      {
        name : "Mayuk Mukherjee",
        email : "Mayuk@gmail.com",
        address : "Barendranagar",
        hobbies : ["painting", "dancing", "acting"]
      },
      {
        name : "Suryendu Sarkar",
        email : "Suryendu@gmail.com",
        address : "Thanapara",
        hobbies : ["gymming", "running", "swimming"]
      },
      {
        name : "Aninda Mukherjee",
        email : "Aninda@gmail.com",
        address : "Biswas para",
        hobbies : ["Tabla", "piano", "mouth-organ"]
      },
  ]

  const smartPhone = [
      {brand : "samsung",  features : ["64GB-internal", "25MP", "4GB-RAM"]},
      {brand : "Redmi",  features : ["128GB-internal", "120MP", "16GB-RAM"]},
      {brand : "i-Phone",  features : ["32GB-internal", "55MP", "2GB-RAM"]},
  ];
  return (
    <div className="App">
        <h2>Nested map in react</h2>
        <ul>
             {studentInfo.map((student, index) => (
                  <li key={index}>
                     <h3>{student.name}</h3>
                     <h3>{student.email}</h3>
                     <h3>{student.address}</h3>
                     <ul>
                         {student.hobbies.map((hobb, hobbIndex) => (
                             <li key={hobbIndex}>{hobb}</li>
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
                               <th>Brand</th>
                               <th>features</th>
                           </tr>
                       </thead>
                       <tbody>
                            {smartPhone.map((phone,phoneIndex) => (
                                 <tr key={phoneIndex}>
                                   <td>{phone.brand}</td>
                                   <td>
                                       <ul className='list-unstyled'>
                                           {phone.features.map((phn, phnIndex) => (
                                              <li key={phnIndex}>{phn}</li>
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
