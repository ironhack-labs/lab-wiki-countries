import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CountriesList from './components/CountriesList';
import { Switch, Route } from 'react-router-dom'
import CountryDetails from './components/CountryDetails';
import countries from './countries.json'


function App() {
  return (
    <Container as='main'>
      <h1 style={ { marginTop: "20px" } }>WikiCountries</h1>
      <br></br>
      <hr></hr>
      <Row>

        <Col>
          <CountriesList></CountriesList>
        </Col>

        <Col>
          <Switch>
            <Route path='/details/:id' render={ match => <CountryDetails { ...countries.filter(elm => elm.cca3 === match.match.params.id)[0] }></CountryDetails> }></Route>
          </Switch>
        </Col>

      </Row >
    </Container >
  );
}

export default App;
