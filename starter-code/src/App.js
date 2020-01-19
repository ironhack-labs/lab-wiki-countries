import React, { Component } from "react";
import "./App.css";
import {Switch, Route} from 'react-router-dom';

import countries from "./countries.json";

import CountryDetail from "./components/CountryDetail";
import Dashboard from "./components/Dashboard";


import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: countries
    };
  }
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand className="NavTitle">WikiCountries</Navbar.Brand>
        </Navbar>
        <Container fluid="true" className="App">
          <Row fluid="true">
            <Col sm={5} className="ScrollableElements CountryListCol">
              <Card>
                <ListGroup variant="flush">
                  {countries.map(country => {
                    return (
                      <Dashboard
                        country={country}
                        key={country.name.official}
                      />
                    );
                  })}
                </ListGroup>
              </Card>
            </Col>
            <Col sm={7} className="ScrollableElements CountryDetailCol">
              {countries.map(country => {
                return (
                 <Switch>
                   <Route path="/:country" component={CountryDetail}/>
                 </Switch>
                );
              })}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

// class App extends Component {
//   constructor(){
//     super()
//     this.state = {
//       countries: []
//     }
// }

// componentDidMount() {
//   axios.get("https://countries.tech-savvy.tech/countries")
//     .then(response => {
//       this.setState({countries: response.data})
//     })
//   }

// render(){ 
//   return(
//     <div className="App">
//       {this.state.countries.length > 0?
//         this.state.countries.map(country => <h1>{country.name.common}</h1>):
//         <h1>Loading...</h1>
//         }
//     </div>
//   )
// }

// }


