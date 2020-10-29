import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Container className='main'>
        <Row>
          <Col>
            <CountriesList />
          </Col>
          <Col>
            <Route path="/country/:countryId" component={CountryDetails} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
