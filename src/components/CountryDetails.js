import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {Switch, Route, Link} from 'react-router-dom'

export default function CountryDetails(props) {
  
  

  
    let country = props.countries.filter((country)=>{return country.cca3 === props.match.params.cca3})[0]

    
    return (
      <div>
        <h1>{country.name.common}</h1>
        <hr></hr>
        <Container>
          <Row>
            <Col>Capital</Col>
            <Col>{country.capital}</Col>
           </Row>
           <hr></hr>
           <Row>
            <Col>Area</Col>
            <Col>{country.area} km<sup>2</sup></Col>
           </Row>
           <hr></hr>
           <Row>
            <Col>Borders</Col>
            <Col>
              <ul style={{listStyle: 'none'}}>
                {country.borders.map((neighbor, index)=>{
                  return <Link to={`/${neighbor}`}><li>{(props.countries.find(country=> country.cca3===neighbor)).name.common}</li></Link>})}
              </ul>
            </Col>
           </Row>
        </Container>
      </div>
    )
  
}
