import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import countries from './countries.json'
import CountryDetails from './components/CountryDetails';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const apiUrl = `https://ih-countries-api.herokuapp.com/countries`

function App() {
  const [ countries, setCountries] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(apiUrl)
      setCountries(response.data)
    }
    fetchData()     
  }, [])

  return (
    <div className="App">
      <Navbar/>
      <div className="container">
            <div className="row">
                <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll'}}>
                  <CountriesList countries={countries}/>
                </div>
                <div className="col-7">
                  <Routes>
                    <Route
                      path="/:countryId"
                      element={<CountryDetails countries={countries}/>}
                    />
                  </Routes>
                </div>
            </div>     
        </div>
    </div>
  );
}

export default App;
