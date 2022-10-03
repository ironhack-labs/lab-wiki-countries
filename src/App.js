import { useCallback, useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { fetchCountries } from './services/services';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetail from './components/CountryDetails/CountryDetails';

function App() {
  const [countries, setCountries] = useState([]);

  const getCountries = useCallback(() => {
    fetchCountries().then((countries) => setCountries(countries));
  }, []);

  useEffect(() => {
    getCountries();
  }, [getCountries]);

  console.log(countries);

  return (
    <div className="App">
      <Navbar/>
      <div className="row">
        <CountriesList countries={countries} />
        <Routes>
          <Route path="/:alpha3code" element={<CountryDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;