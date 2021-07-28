import Navbar from './components/navbar/Navbar';
import { Route } from 'react-router-dom';
import CountriesList from './components/countries-list/CountriesList';
import CountryDetails from './components/country-details/CountryDetails';
import { Component } from 'react';
import countriesData from './data/countries.json';

import './App.css';

class App extends Component {
  state = {
    countries: [],
  };

  componentDidMount() {
    this.setState({
      countries: countriesData,
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar />

        <div className="container">
          <div className="row">
            <CountriesList countries={this.state.countries} />
            {/* React Router Route rendering the CountryDetails should go here */}
            <Route exact path="/:id" component={CountryDetails} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
