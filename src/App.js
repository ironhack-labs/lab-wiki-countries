import './App.css';

import { Route, Switch } from 'react-router-dom';
import { Component } from 'react';

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

// import countries from './countries.json';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      countries: undefined,
    };
  }

  componentDidMount = () =>
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((response) => {
        console.log(response.data);
        this.setState({
          countries: [...response.data],
        });
      })
      .catch((err) => console.error(err));

  render = () => (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <CountriesList countries={this.state.countries} />
          <Switch>
            <Route
              path="/:alpha3Code"
              render={(props) => (
                <CountryDetails {...props} countries={this.state.countries} />
              )}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
