import React, { Component } from 'react';
import './App.css';
import countries from "./countries.json"
import NavBar from "./Components/navbar/navbar"
import ListItem from "./Components/ListItem/ListItem"
import CountryDetail from "./Components/CountryDetail/CountryDetail"

import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Route } from 'react-router-dom'



class App extends Component {
  constructor() {
    super()
    this.state = { countries }
  }


  render() {

    return (
      <>

        <Container>
          <NavBar />
          <Row>

            <Col md={5}>
              <div className="country-ist">
                <ListGroup>
                  {this.state.countries.map((elm, idx) => <ListItem id={elm.cca3} key={idx} name={elm.name.common} flag={elm.cca2} />)}
                </ListGroup>
              </div>
            </Col>

            <Col md={7}>

              <Route path="/:id" render={match => <CountryDetail  {...match} />} />
            </Col>

          </Row>
        </Container>

      </>
    )
  }
}

export default App;
