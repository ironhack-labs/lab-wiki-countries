import { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import Navbar from './components/Navbar/Navbar';
// import countriesData from './countries.json'
import { Route, Routes } from 'react-router-dom';





function App() {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    const fetchData = () => {
      axios
        .get('https://ih-countries-api.herokuapp.com/countries')
        .then(countriesFromAPI => {
          // console.log('BOOM BOOM BOOM BOOM', countriesFromAPI.data)
          setCountries(countriesFromAPI.data)
        })
        .catch(error => {
          console.error(error);
        });
    };

    fetchData();
  }, []);

  return (
    <div className="App">

      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col-4">

            <CountriesList countries={countries} />

          </div>
          <div className="col-8">

            <Routes>
              <Route path='/:id' element={<CountryDetails countries={countries} />} />
            </Routes>

          </div>

        </div>
      </div>


    </div>
  );
}

export default App;
