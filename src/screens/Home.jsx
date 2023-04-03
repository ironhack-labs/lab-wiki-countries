import React, { useEffect, useState } from 'react';
import { CountriesList } from '../components/Countries/CountriesList/CountriesList';
import { listCountries } from '../services/CountryService';

export const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    listCountries()
      .then((countries) => setCountries(countries))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="my-4">
      {countries.map((country) => (
        <CountriesList {...country} key={country.name} />
      ))}
    </div>
  );
};
