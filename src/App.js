import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Axios from 'axios'

import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countriesJson from './countries.json';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome'

function App() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
    setIsLoading(true)
    Axios.get('https://ih-countries-api.herokuapp.com/countries')
      .then(res=>{
        console.log(res)
        setIsLoading(false)
        console.log(res.data)
        setCountries(res.data.sort((a,b)=>a.name.common.localeCompare(b.name.common)))
      })
      .catch(err=>console.log(err))
  },[])

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-5">
            {isLoading && <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
              </div>}
            <CountriesList countries={countries} />
          </div>
          <Routes>
            <Route
              path="/country/:id"
              element={<CountryDetails countries={countries} />}
            />
            <Route path="/" element={<Welcome/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
