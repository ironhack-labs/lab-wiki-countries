import React, { Component } from 'react'

import Countries from './../../countries.json'

import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './Home.css'

import CountryCard from './../../components/countryCard/countryCard'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      countries: [...Countries],
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col className="country-list">
            {this.state.countries.map((elm, idx) => (
              <CountryCard key={idx} name={elm.name.common} flag={elm.flag} />
            ))}
          </Col>
          <Col></Col>
        </Row>
      </Container>
    )
  }
}

export default Home
