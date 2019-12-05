import React from 'react';
import logo from './logo.svg';
import countries from './countries.json'
import { Route, Redirect} from 'react-router';
import { Link } from 'react-router-dom';
import './App.css';
import CountryDetail from './components/CountryDetail';

class App extends React.Component {
    state = {
      countries: countries,
      countriesCopy: countries,
      test: 'test'
    };
  render() {
    return (
      <div className = 'App'>
      <header className = "list-group-item list-group-item-action active">Wikicountries</header>
        <div className="row px-md-5">
              <ul className="col-5">
                {this.state.countries.map((country, i) => {
                      return (
                        <li><a className="list-group-item list-group-item-action text-left" href = {`/${country.cca3}`}>{country.flag}{country.name.common}</a></li>
                      );
                    })}
              </ul>

              <Route exact path="/:countryId" component={CountryDetail} />
        </div>
    </div>
  );
  }
}

export default App;


{/* <li><Link to ={`/${country.cca3}`}>{country.name.common}</Link></li> */}