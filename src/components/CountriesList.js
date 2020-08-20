import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Row, Col, ListGroup} from 'react-bootstrap'
import {Switch, Route, Link} from 'react-router-dom'
import CountryDetails from './CountryDetails'

export default class CountriesList extends Component {
  render() {
    console.log (this.props.list)
    return (
      <>
        <Row>
          <Col sm={4}>
            <ListGroup  style={{overflowY:'scroll', height:'100vh'}}>
              {this.props.list.map((country, index)=>{
                return <Link to={`/${country.cca3}`}><ListGroup.Item action key={index}>
                          {country.flag} {country.name.common}
                        </ListGroup.Item></Link>})}
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Switch>
              <Route path="/:cca3" render={(routeProps)=>{
          return <CountryDetails {...routeProps} countries={this.props.list}/>
        }} />
            </Switch>
          </Col>
        </Row>
      </>
    )
  }
}
