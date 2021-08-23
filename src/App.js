import React from 'react';
import axios from 'axios';
import './App.css';
// import countriesList from './countries.json';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Spinner from './components/Spinner';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  state = {
    countriesArr: [],
  };

  componentDidMount() {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((response) =>
        this.setState({
          countriesArr: response.data,
        })
      )
      .catch((error) => console.log(error));
  }

  renderContent() {
    return (
      <div className="main-content">
        <CountriesList countriesArr={this.state.countriesArr} />

        <Switch>
          <Route
            path="/country/:id"
            render={(routeProps) => {
              const countrySelected = this.state.countriesArr.find(
                (country) => country.alpha3Code === routeProps.match.params.id
              );
              return (
                <CountryDetails
                  {...countrySelected}
                  countriesArr={this.state.countriesArr}
                />
              );
            }}
          />
        </Switch>
      </div>
    );
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          {this.state.countriesArr.length ? this.renderContent() : <Spinner />}
        </div>
      </Router>
    );
  }
}

export default App;
