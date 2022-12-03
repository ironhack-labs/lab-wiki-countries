import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
// import countriesJSON from './countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';



function App() {
  
  const [countries, setCountries] = useState([])
  
  useEffect(() => {
      fetch("https://ih-countries-api.herokuapp.com/countries")
      .then((result) => {
        return result.json();
      })
      .then((countries) => {
        setCountries(countries);
      });
  }, []);

  countries && console.log("countries: ", countries)

return (
    <div className="App">
      <Navbar/>
      
          <Routes>
            <Route path="/" element={<CountriesList countries={countries}/>} />
            <Route path="/:countryId" element={<CountriesList countries={countries}/>} />
          </Routes>

    </div>
  );
}

export default App;
