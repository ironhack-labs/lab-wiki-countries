import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import { CountriesList } from './components/CountriesList';
import CountriesDetails from './components/CountriesDetails';
import NavBar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import countriesFromJson from './countries.json'

function App() {

  const [countries, setCountries] = useState([]);
  const baseURL = "https://ih-countries-api.herokuapp.com/countries"

  useEffect(() => {
    axios.get(baseURL)
    .then((res) => {
      setCountries(res.data)
    })
    .catch((e) => {
        console.log(e)
    })
}, [])

  return (
    <div className="App">

      <NavBar />
      <div className="left-div">
        <div>
          <CountriesList countries={countries}/>
        </div>
        <div>
          <Routes>
            <Route path='/:countryId' element={<CountriesDetails countriesArray={countries}/>}></Route>
            <Route path="*" element={<h3>this page does not exist</h3> }> </Route>
          </Routes>
        </div>
      </div>

      
    
    </div>
  );
}

export default App;
