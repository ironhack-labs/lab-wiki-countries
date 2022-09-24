import './App.css';
import { Routes, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';
import countryArray from './countries.json'
import { useState, useEffect } from "react";
import axios from "axios";


const apiURL = "https://ih-countries-api.herokuapp.com/countries";


function App() {

  const [countries, setCountries] = useState(countryArray)

  useEffect(() => {                          
    axios.get(apiURL)
      .then((response) => {
        console.log('response.data', response.data);
        setCountries(response.data)
      }).catch(err => console.log(err));
  }, [] );  // <- [] means: Run the effect only once, after initial render
 


  return (
    <div className="App">
      <Navbar />  
    
      <div>
        <CountriesList  countries={countries} />
          <Routes>
            <Route path="/:id" element={<CountryDetails countries={countries} />} />
         
          </Routes> 
      </div>
    </div>
  );
}

export default App;


