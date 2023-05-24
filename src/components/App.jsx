import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import CountriesList from './CountriesList/CountriesList';
import CountriesDetails from './CountriesDetails/CountriesDetails';
import { useEffect, useState } from "react";
// import countries from './../countries.json'

function App() {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch('https://ih-countries-api.herokuapp.com/countries')
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }, []);

  return <div className="App">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />

    <Navbar />

    <div className="container">
      <div className="row">

        <CountriesList countries={countries} />
        <Routes>
          <Route path='/:country_id' element={<CountriesDetails countries={countries} />} />
        </Routes>

      </div>
    </div>
  </div>;
}

export default App;
