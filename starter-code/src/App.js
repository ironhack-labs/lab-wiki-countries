import React, {Component} from 'react';
import './App.css';

import CountryDetails from './components/CountryDetail'
import countries from '../src/countries.json'
import Country from './components/country'
import {
  Switch,
  Route,
} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class App extends Component {

  constructor() {
    super()
    this.state = {
 countries
    }

  }

  render() {
  return (
    <Container >
      <h1>WIKICOUNTRY</h1>
  <Row >
    <Col>
      {this.state.countries.map((elm, idx) => <Country key={idx} code={elm.cca3} name={elm.name.common} flag={elm.flag} />)}
  </Col>
  <Col>
  <Switch>
        <Route path="/CountryDetails/:code" render={match => <CountryDetails {...match} />} />     
  </Switch>
  </Col>
</Row>
    </Container>
  );
}}

export default App;
