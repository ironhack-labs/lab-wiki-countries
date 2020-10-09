import React, { useState, useEffect } from 'react';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import { getCountries } from './services/api-service';

function App() {
  const [countries, setConutries] = useState([]);
  const [countryClick, handlerCountry] = useState('');
  const [filter, setFilter] = useState({});

  useEffect(() => {
    getCountries().then(
      (response) => response.length !== 0 && setConutries(response)
    );
  }, []);

  useEffect(() => {
    setFilter(countryClick);
  }, [countryClick]);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row no-gutters">
          <div className="col-5">
            <CountriesList countries={countries} handleClick={handlerCountry} />
          </div>
          <div className="col-7">
            <CountryDetails
              countries={countries}
              filter={filter}
              handleClick={handlerCountry}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
