import { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useState } from 'react';

import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';

// import countries from './countries.json';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchFunc = async () => {
      const response = await fetch(
        'https://ih-countries-api.herokuapp.com/countries'
      );
      const data = await response.json();
      await setCountries(data);
    };
    fetchFunc();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/countries" />
        </Route>
        <Route path="/countries" exact>
          <CountriesList countries={countries} />
        </Route>
        <Route path="/countries/:id" exact>
          <CountryDetails countries={countries} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
