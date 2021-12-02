import './App.css';
import React, { useState } from 'react';
import CountriesData from './countries.json';
import NavBar from './Components/NavBar/NavBar';
import CountriesList from './Components/CountriesList/CountriesList';
import CountryDetails from './Components/CountryDetails/CountryDetails';
import { Switch, Route } from 'react-router-dom';

function App() {
  const [countries, setCountires] = useState(CountriesData);

  let CountryInformation = (code) => {
    let country = countries.filter((elm) => {
      return elm.cca3 === code;
    });
    return country;
  };

  return (
    <div>
      <NavBar />
      <div className="App">
        <div className="List">
          {countries.map((country) => {
            return <CountriesList country={country} />;
          })}
        </div>
        <Switch>
          <Route
            path="/country/:code"
            render={(props) => (
              <CountryDetails
                {...props}
                country={CountryInformation(props.match.params.code)}
                allCountries={countries}
              />
            )}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
