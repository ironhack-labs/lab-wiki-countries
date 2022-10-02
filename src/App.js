import './App.css';
import { useCallback, useEffect, useState } from 'react'
import { Route, Routes} from 'react-router-dom'
import Navbar from './components/misc/Navbar';
import CountriesList from './components/countries/ConuntriesList.jsx'
import CountryDetail from './components/countries/CountryDetails.jsx'
import { fetchCountries } from './services/country-services'

function App() {
  const [countries, setCountries ] = useState([]);

  const getCountries = useCallback(() => {
    fetchCountries()
      .then((countries) => setCountries(countries));
  }, [])

useEffect(() => {
  getCountries();
}, [getCountries])

  return (
    <div className="App">
      <Navbar />
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
