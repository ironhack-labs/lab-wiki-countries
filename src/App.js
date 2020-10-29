import Axios from 'axios'
import React, { Component } from 'react'
import Nav from "./components/Nav"
import CountryList from "./components/CountryList"
import CountryDetails from './components/CountryDetails'
import { Route } from "react-router-dom"
import { Col, Container, Row } from 'react-bootstrap'
import "./App.css"

export default class App extends Component {

  state = {
    countries: []
  }

  componentDidMount() {
    Axios.get("https://countries.tech-savvy.tech/countries")
      .then((response) => {
        let countriesData = response.data.map((elem) => {
          return {
            name: elem.name.common,
            capital: elem.capital,
            area: elem.area,
            cca3: elem.cca3,
            flag: elem.flag,
            borders: elem.borders
          }
        })

        this.setState({
          countries: countriesData
        })
      })
  }

  render() {
    return (
      <div className="main-div">
        <Nav />
        <Container className="main-container">
          <Row>
            <Col className="main-column left-col">
              <CountryList countries={this.state.countries} />
            </Col>
            <Col className="main-column">
              <Route path="/:id" render={(props) => (
                <CountryDetails {...props} countries={this.state.countries} />
              )} />
            </Col>
          </Row>
        </Container>

      </div>
    )
  }
}
