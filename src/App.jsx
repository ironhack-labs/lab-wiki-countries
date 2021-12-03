import './App.css';
import { Navbar } from './compoments/Navbar';
import { CountriesList } from './compoments/CountriesList';
import { Route, Routes } from 'react-router';
import { CountryDetail } from './compoments/CountryDetail';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    console.log('load countries!');
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries`)
      .then((res) => setCountries(res.data));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div
            className="col-5"
            style={{ maxHeight: '90vh', overflow: 'scroll' }}
          >
            <CountriesList countries={countries} />
          </div>
          <div className="col-7">
            <Routes>
              <Route
                path="/countries/:id"
                element={<CountryDetail countries={countries} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
