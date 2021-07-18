import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import countries from './countries.json'
import CountryDetails from './components/CountryDetails';

class App extends React.Component {

  state = {
    countries: countries
  }

  componentDidMount() {
    console.log(countries);
  }

  render() {
    return (
      <div>
        
        <Navbar />
        <div className="d-flex">
        <CountriesList countries={this.state.countries}/>
        
        <Route exact path='/:id' component={CountryDetails} />
        </div>
      </div>
    );
  }
}

export default App;