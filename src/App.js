import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import CountryDetails from './pages/CountryDetails';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState(null);

  const getCountries = async () => {
    let res = await axios.get(
      'https://ih-countries-api.herokuapp.com/countries'
    );
    setCountries(res.data);
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div
            className="col-5"
            style={{ maxHeight: '850px', overflowY: 'scroll' }}
          >
            {countries !== null && <CountriesList countries={countries} />}
          </div>
          <div className="col-7">
            <Routes>
              <Route
                path="/:countryId"
                element={<CountryDetails countries={countries} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
