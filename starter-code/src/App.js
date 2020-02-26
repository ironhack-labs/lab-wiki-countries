import React, { Component } from 'react'
import './App.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Countries from './countries.json'
import { Route } from 'react-router-dom'
import Navbar from './Components/NavBar/NavBar'
import CountryDetail from './Components/CountryDetail/CountryDetail'


class App extends Component {
  render() {
    return (
      <>

        <Container>
          <Row>
            <Col md={4} className='Scroll'>
              <Navbar countries={Countries} />
            </Col>
            <Col md={8}>
              <Route path='/:id' render={props => <CountryDetail {...props} countries={Countries} />}>
              </Route>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}


export default App
