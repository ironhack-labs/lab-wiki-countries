import React from 'react';
import { Switch,Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Container,Row,Col} from 'react-bootstrap';

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import HomePage from './components/HomePage';
import CountryDetails from './components/CountryDetails';

import countriesSrc from './countries.json';


function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Row>
          <Col lg={3}>
            <CountriesList src={countriesSrc} />
          </Col>
          <Col lg={9}>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/country/:cca3" component={CountryDetails} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
