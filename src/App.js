import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';


function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const req = await axios.get("https://ih-countries-api.herokuapp.com/countries");
        setCountries(req.data);
      }
      catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);


  return (
    <div className="App">
      <Navbar/>
      <div className='container'>
        <div className='row'>
          <CountriesList countries={countries}/>
          <Routes>
            <Route path="/:alpha3Code" element={<CountryDetails countries={countries}/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;