import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import countriesArr from './countries.json'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import CountryDetail from './components/country/CountryDetail'
import Country from './components/country/Country'

import { Switch, Route, Redirect } from 'react-router-dom'

class App extends Component {

  constructor() {
    super()
    this.state = {
      countries: countriesArr
    }
  }

  render() {
    return (
      <div className='App'>
        <Navbar className="navbar navbar-dark bg-primary mb-3">
          <Container>
            <a className="navbar-brand" href="/">WikiCountries</a>
          </Container>
        </Navbar>
        <Container>
          <Row>
            <Col className>
              {this.state.countries.map((elm, idx) => <Country key={idx} {...elm} />)}
            </Col>

          </Row>



        </Container>

      </div>
    )
  }
}

export default App;
