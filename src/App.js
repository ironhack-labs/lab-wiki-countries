import { Component } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import Navbar from './components/Navbar/Navbar';
import listCountries from './countries.json';

let getCountry = (cca3) => {
  let country = listCountries.filter((elm) => {
    return elm.cca3 === cca3;
  });
  return country;
};

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="main">
          <CountriesList allCountries={listCountries} />
          <Switch>
            <Route
              path="/countries/:cca3"
              render={(props) => (
                <CountryDetails
                  {...props}
                  country={getCountry(props.match.params.cca3)}
                  allCountries={listCountries}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
