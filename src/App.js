import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import countriesJson from './countries.json';

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';

function App() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries([...countriesJson]);
  }, []);

  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="row">
          <div
            className="col-5"
            style={{ maxHeight: '90vh', overflow: 'scroll' }}
          >
            <CountriesList countries={countries} />
          </div>
          <div className="col-7">
            <Route
              path="/:cca3"
              render={(routeProps) => (
                <CountryDetail {...routeProps} countries={countries} />
              )}
            ></Route>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
