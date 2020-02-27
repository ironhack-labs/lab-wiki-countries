import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CountryDetails from './components/CountryDetail'
import countriesJSON from './countries.json'
import Country from './components/Country'
import {Switch,Route} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class App extends Component {
  constructor() {
    super()
    this.state = {
      countries:countriesJSON
    }

  }
  render(){
    return(
      <Container>
        <h1>Wiki Country</h1>
        <Row >
          <Col>
            <Container className="countryList">
              {this.state.countries.map((elm, idx) => <Country key={idx} code={elm.cca3} name={elm.name.common} flag={elm.flag} />)}
            </Container>
          </Col>
          <Col>
            <Switch>
              <Route path="/CountryDetails/:code" render={match => <CountryDetails {...match} />} />     
            </Switch>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;
