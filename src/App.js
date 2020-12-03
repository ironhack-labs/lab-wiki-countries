import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route, Switch } from 'react-router-dom';
import countries from './countries.json';

class App extends React.Component {
  state = {
    countries: [],
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <CountriesList countries={this.state.countries} />
            {/* React Router Route rendering the CountryDetails should go here */}
            <Switch>
              <Route exact path="/" component={CountriesList} />
              <Route exact path="/:countryId" component={CountryDetails} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.setState({ countries: countries });
  }
}

export default App;
