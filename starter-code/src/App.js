import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"
import countries from "./countries.json";
import './App.css';
import CountryList from './components/countryList.jsx';
import CountryDetails from './components/countryDetails';

class App extends Component {
  state = {
    countries: []
  }

  async componentDidMount() {
    const countries = await this.getCountries()
    this.setState({
      countries
    })
  }

  getCountries = async () => {
    return countries
  }

  renderCountries = () => {
    const { countries } = this.state
    return countries.map((country, index) => {

      return <CountryList   {...country} key={index} />
    })
  }

  render() {
    return (
      <div >
        <span className="blah">{this.renderCountries()}</span>
        <span> <Route exact path="/country/:id" render={(props) => <CountryDetails countries={this.state.countries} {...props} />} /></span>
      </div>
    );
  }
}

export default App;


