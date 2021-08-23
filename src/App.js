import './App.css';
import countries from './countries.json'
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar />
      <div className="country-list">
        <CountriesList countries={countries} />
        <Switch>
          <Route
            path="/:cca3"
            render={(routeProps) => {
              const requestedCountry = countries.find((country) => {
                return country.cca3 === routeProps.match.params.cca3;
              });
              return <CountryDetails {...requestedCountry} />;
            }}
            exact
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
