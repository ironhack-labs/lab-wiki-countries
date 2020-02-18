import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import {Switch, Route, Link} from 'react-router-dom'



class FinerDetails extends Component {

        countryDetails = () => {
            let country = this.props.countries.find(eachCountry => {
                return eachCountry.cca3 === this.props.match.params.countryId
            })
            // console.log(country)
            return (
                <div className="countryDetail">

                        <h3> | {country.name.common}</h3>
                        <hr></hr>
                    <Container> 
                     <Row>
                        <Col className="highlights">Capital:</Col>
                        <Col> {country.capital} </Col>
                     </Row>
                     <hr></hr>
                     <Row>
                        <Col className="highlights">Area:</Col>
                        <Col>{country.area} km <sup>2</sup></Col>
                     </Row>
                    </Container>
                </div> 
            )
       }

       borderCountries = () => {
        let Country = this.props.countries.find(eachCountry => {
            return eachCountry.cca3 === this.props.match.params.countryId
        }); 
        let borders = Country.borders.map((eachBorder, i) =>{       
            return (
            <li> 
                <Link key={i} to ={`/${eachBorder}`}> 
                    {eachBorder} 
                </Link> 
            </li>)
        }); return borders      
    }


render() {
    return ( 
        <div>
                {this.countryDetails()}
                <hr></hr>
                <Container className="highlights">                
                    Borders:
                    <Row>
                        <Col>
                        <ul>
                            {this.borderCountries()}
                        </ul>
                        </Col>
                    </Row>
                </Container>

            </div>
        )      
    }
}

export default FinerDetails;
