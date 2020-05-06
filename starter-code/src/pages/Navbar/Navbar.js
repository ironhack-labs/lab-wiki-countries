import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Countries from '../../countries.json'

import 'bootstrap/dist/css/bootstrap.min.css'
import Col from 'react-bootstrap/Col'

import './Navbar.css'

import CountryCard from '../../components/countryCard/countryCard'

class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      countries: [...Countries],
    }
  }

  render() {
    return (
      <Col className="country-list">
        {this.state.countries.map((elm, idx) => (
          <Link to={`/${elm.cca3}`}>
            <CountryCard key={idx} name={elm.name.common} flag={elm.flag} />
          </Link>
        ))}
      </Col>
    )
  }
}

export default Navbar
