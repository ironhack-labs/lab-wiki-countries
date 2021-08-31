import { Component } from 'react';
import CountriesList from './CountriesList';
import CountryDetails from './CountryDetails';
import Navbar from './Navbar';
import data from './data/countries.json';
import { Route, Switch } from 'react-router-dom';

export class App extends Component {
  state = {
    countries: [...data],
  };
  render() {
    const { countries } = this.state;
    return (
      <>
        <Navbar />
        <div className="d-flex">
          <CountriesList countries={countries} />
          <Switch>
            <Route path="/details/:cca3" component={CountryDetails} />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
