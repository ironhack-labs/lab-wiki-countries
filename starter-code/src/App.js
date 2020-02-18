import React from 'react';
import './App.css';
import CountryDetail from './components/CountryDetail'
import { Row, Col, Container } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <header className="App-header">WikiCountries</header>
          <Container> 
                     <Row>
                       <Col className="col-5"><h2>Country list</h2></Col>
                       <Col className="col-7"><h2>Country Detail</h2></Col>
                     </Row>
          </Container>

        <CountryDetail/>

    </div>
  );
}

export default App;
