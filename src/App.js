import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import countries from './countries.json';

function App() {
  const [data, setData] = useState(null);
  const [pays, setPays] = useState(countries);
  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries}/api/projects/`)
      .then((response) => {
        const oneData = response.data;
        setData(oneData);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList pays={pays} />
          <Routes>
            <Route
              path="/:cca3"
              element={<CountryDetails pays={pays} setPays={setPays} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
