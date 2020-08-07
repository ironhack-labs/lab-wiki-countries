import React, { Component } from 'react';
import NavigBar from './components/NavigBar';
import CountriesList from './components/CountriesList';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Axios from 'axios';
import CountryDetail from './components/CountryDetail';
import { Container, Col, Row } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      countryCode: '',
      countryData: {},
    };
  }

  componentDidMount() {
    Axios.get('https://restcountries.eu/rest/v2').then((response) => {
      this.setState({ countries: response.data });
    });
  }

  render() {
    let countryDetails = '';
    if (this.state.countryCode) {
      countryDetails = (
        <Route
          exact
          path="/:id"
          render={(props) => (
            <CountryDetail
              key={this.state.countryCode}
              countryCode={this.state.countryCode}
              countries={this.state.countries}
              countryData={this.state.countryData}
              setState={(param) => this.setState(param)}
              {...props}
            />
          )}
        ></Route>
      );
    }
    return (
      <div className="App">
        <NavigBar/>
        <Container>
          <Row>
            <Col lg={3}>
              <CountriesList
                setState={(param) => this.setState(param)}
                countries={this.state.countries}
              />
            </Col>
            <Col lg={9}>
              <Switch>
                <Route exact path="/">
                  <h1>Please select a country</h1>
                </Route>
                {countryDetails}
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
