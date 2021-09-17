import './App.css';

import { Route } from 'react-router';

import NavBar from './components/Navbar/NavBar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import Loading from './components/Loading/Loading';

//import countries from './countries.json';
import { useState, useEffect } from 'react';

const fetchCountries = (setCountries) => {
  fetch('https://restcountries.eu/rest/v2/all')
    .then((response) => response.json())
    .then((data) => setCountries(data));
};

function App() {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    fetchCountries(setCountries);
  }, []);

  return !countries ? (
    <Loading />
  ) : (
    <div className="contatiner">
      <div className="row">
        <NavBar />
        <CountriesList countries={countries} />
        <Route
          exact
          path="/:alpha3Code"
          render={(routeProps) => (
            <CountryDetails
              countries={countries}
              alpha3Code={routeProps.match.params.alpha3Code}
            />
          )}
        />
      </div>
    </div>
  );
}

export default App;
