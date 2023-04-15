import { useState, useEffect } from 'react';
import './App.css';
import COUNTRIES_API from './countries.json';
import MyNavBar from './components/MyNavBar';
import CountiesList from './components/CountiesList';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(COUNTRIES_API);
  }, []);

  return (
    <div className="App">
      <MyNavBar />
      <Routes>
        <Route path="/" element={<CountiesList allCounties={countries} />} />
      </Routes>
    </div>
  );
}

export default App;
