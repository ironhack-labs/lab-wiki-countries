import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import countries from './countries.json';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main-container">
        <div className="countries-list-left">
          <CountriesList countries={countries} />
        </div>
        <div className="country-details-right">
          <Switch>
            <Route
              path="/list/:countryCode"
              render={(props) => (
                <CountryDetails countries={countries} {...props} />
              )}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
