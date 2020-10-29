import React, { useEffect, useState } from 'react';
import {Link, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails'
import CountriesList from './components/CountriesList'

function App() {
  
  const [ allCountries, setAllCountries ] = useState([]);
  

  useEffect(() => {
    axios.get('https://countries.tech-savvy.tech/countries')
      .then((result) => {
        setAllCountries(result.data)
    });
  }, []);





  return (
      <div className="App">
        <Navbar />
        <div style={{display: 'flex'}}>
          {/* Had to make styling inline so it works, im guessing conflict with bootstrap */}
          <div clasName="all-countries" style={{maxHeight: '340px', overflow: 'auto'}}>
            {
              allCountries.map((country, i) => {
                //tried to send the list down the line to display names but didnt work
                return <CountriesList key={i} country={country} countryList={allCountries}/>
              })
            }
          </div>
          <div style={{display: 'flex', flexDirection: 'column', width: '75%'}}>
            <Route path="/:cca3" component={CountryDetails} />
          </div>

        </div>
      </div>
    );
}

export default App;
