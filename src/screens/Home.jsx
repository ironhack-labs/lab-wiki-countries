import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CountriesList } from '../components/Countries/CountriesList/CountriesList';
import { CountryDetails } from '../components/Countries/CountryDetails/CountryDetails';
import { listCountries } from '../services/CountryService';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listCountries()
      .then((countries) => {
        setCountries(countries);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {loading ? (
        'Loading List of Countries...'
      ) : (
        <div className="d-flex justify-content-around my-4">
          <div>
            {countries.map((country) => (
              <CountriesList {...country} key={country._id} />
            ))}
          </div>
          <div>
            <Routes>
              <Route
                path="/:id"
                element={<CountryDetails countries={countries} />}
              />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
};
