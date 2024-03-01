import logo from './logo.svg';
import './App.css';
// import Button from 'react-bootstrap/Button';
// import Alert from 'react-bootstrap/Alert';
import {Button,Alert} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
    <h1>Install bootstrap</h1>
    {[
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info',
      'light',
      'dark',
    ].map((variant) => (
      <Alert key={variant} variant={variant}>
        {variant} alert has occured !! hurry out !!
      </Alert>
    ))}
    <Button variant="primary">Primary</Button>{' '}
    <Button variant="secondary">Secondary</Button>{' '}
    <Button variant="success">Success</Button>{' '}
    <Button variant="warning">Warning</Button>{' '}
    <Button variant="danger">Danger</Button>{' '}
    <Button variant="info">Info</Button>{' '}
    <Button variant="light">Light</Button>{' '}
    <Button variant="dark">Dark</Button>
    <Button variant="link">Link</Button>
    </div>
  );
}

export default App;
