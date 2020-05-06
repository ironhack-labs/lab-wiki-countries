import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Navbar from './pages/Navbar/Navbar'
import Details from './pages/Details/Details'

import 'bootstrap/dist/css/bootstrap.min.css'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

function App() {
  return (
    <Container>
      <Row>
        <Navbar />
        <Col>
          <Switch>
            <Route path="/:id" render={() => <Details />} />
          </Switch>
        </Col>
      </Row>
    </Container>
  )
}

export default App
