import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CountryList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import countriesArr from './countries.json';

function App() {
  const [countries, setCountries] = useState(countriesArr);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = () => {
    axios
      .get(process.env.REACT_APP_BASEAPI)
      .then((response) => {
        setCountries(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <Navbar />
        </div>
      </nav>

      <div className="container">
        <div className="row">
          <div
            className="col-5"
            style={{ maxHeight: 90 + 'vh', overflow: 'scroll' }}
          >
            <div className="list-group">
              <CountryList countries={countries} />;
            </div>
          </div>
          <Routes>
            <Route
              path="/:countryId"
              element={<CountryDetails details={countries} />}
            ></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;
