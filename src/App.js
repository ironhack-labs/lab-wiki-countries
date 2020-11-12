import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';
import axios from 'axios'

class App extends Component {
  
  
  state = { countries };

  componentDidMount = async () => {
      const countries = await axios.get("https://countries.tech-savvy.tech/countries")  
      this.setState({ countries: countries.data})
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container d-flex mr-5">
          <div className="row">
          <CountriesList countries={countries} />
            <Switch>
              <Route
                exact
                path="/countries/:cca3"
                render={(props) => (
                  <CountryDetails {...props} countries={countries} />
                )}
              />
            </Switch>
            <div>
              {
                this.state.countries && this.state.countries.map((country, index) => (<h2 key={index}>{country.name.common}<span>{country.flag}</span></h2>) )
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
