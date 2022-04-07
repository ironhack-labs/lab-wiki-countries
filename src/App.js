import './App.css';
import NavBar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [countries, setCountries] = useState();

  useEffect(() => {
    const fetchCountries = async () => {
      const { data } = await axios.get(
        ' https://ih-countries-api.herokuapp.com/countries'
      );
      setCountries(data);
    };
    fetchCountries();
  }, [countries]);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="countries-list" element={<CountriesList />} />
        <Route
          path="/countries-list/:alpha3Code"
          element={<CountryDetails countries={countries} />}
        />
      </Routes>
    </div>
  );
}

export default App;
