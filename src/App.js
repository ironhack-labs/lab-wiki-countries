import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { getCountries } from './utils/api';

export default function App() {
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setLoading(true);

    (async () => {
      setCountries(await getCountries());
      setLoading(false);
    })();
  }, []);

  return (
    <div className="App">
      <Navbar />

      {loading && (
        <div className="text-center">
          <h1>Loading data...</h1>
        </div>
      )}

      <Routes>
        <Route path="/" element={<CountriesList countries={countries} />}>
          <Route path="/:code" element={<CountryDetails countries={countries} />} />
        </Route>
      </Routes>
    </div>
  );
}
