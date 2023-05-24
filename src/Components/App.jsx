import './App.css';
import { Route, Routes } from 'react-router-dom';
import Axios from 'axios';
import Navbar from './Navbar/Navbar'
import CountriesList from './CountriesList/CountriesList'
import CountryDetails from './CountryDetails/CountryDetails';
import { useState, useEffect } from 'react';


function App() {

  const [countries, setCountries] = useState([])

  useEffect(() => {

    Axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then(response => {
        setCountries(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [setCountries])

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-4">
            <CountriesList countries={countries} />
          </div>
          <div className="col-6">
            <Routes>
              <Route path='/:countryId' element={<CountryDetails countries={countries} />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;



