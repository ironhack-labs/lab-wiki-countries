import { useCallback, useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar.jsx'
import CountriesList from './components/Countries/CountriesList';
import CountryDetail from './components/Countries/CountryDetails';
import { fetchCountries } from './components/service/countries'


function App() {

  const [countries, setCountries] = useState([]);

  const getCountries = useCallback(() => {
    fetchCountries().then((countries) => setCountries(countries));
  }, [])

  useEffect(() => {
    getCountries();
  }, [getCountries]);

  console.log(countries);
  
  return (
    <div className="App">
      <NavBar />
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
