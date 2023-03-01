import './App.css';
import { Route, Routes } from 'react-router-dom';
// import countries from '../countries.json'
import Navbar from './Navbar/Navbar';
import CountriesList from './CountriesList/CountriesList';
import CountryDetails from './CountryDetails/CountryDetails';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {

  const [countries, setCountries] = useState([])
  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then(res => {
        const data = res.data
        setCountries(data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <Navbar />
      <div className='countriesInfo row'>
        <div className="col-6">
          <CountriesList countries={countries} />
        </div>
        <div className="col-6">
          <Routes>
            <Route path="/:id" element={<CountryDetails countries={countries} />} />
          </Routes>
        </div>

      </div>
    </div>
  );
}

export default App;
