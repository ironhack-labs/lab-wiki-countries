import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';



//routes works by checking all of its child route and redirect components and then stops
//searching once it finds an exact match, it ensures that only one route or redirect is rendered
// LIST MORE SPECIFIC ROUTES BEFORE less specific ones
function App() {
  const [countries, setCountries] = useState([]); //since we have an array of countries




  //useEffect is used to load the data from countries.json during the component mounting, and runs  after component rendering takes place
  useEffect(() => {
    const fetchData = async () => {
    //fetch returns a promise that will be resolved to the response object
    //this includes the request and data of the object
    const result = await axios('https://ih-countries-api.herokuapp.com/countries');
    setCountries(result.data);
  };
  fetchData();
}, []);
    
  
   return (
    <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <CountriesList countries={countries} />
            <Routes>
              <Route path="/:alpha3Code" element={<CountryDetails countries={countries} />} />
            </Routes>
          </div>
        </div>
    </div>
  );
}
export default App
