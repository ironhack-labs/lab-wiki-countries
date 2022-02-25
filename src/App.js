import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Spinner from 'react-spinkit';
import axios from 'axios';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {

    axios.get("https://ih-countries-api.herokuapp.com/countries")
    .then((response) => {
        console.log( "this is what we get: ", response.data);
        setCountries(response.data);
      }
    )
    .catch((err) => console.log("Error getting countries from API: ", err))

  }, []);

  return (
    <div className="App">
      <Navbar />

      { 
        (countries.length === 0) ? 

          <div className="d-flex justify-content-center mt-5" >
            <Spinner color="#007BFF"/>
          </div> :

          <div className="d-flex justify-content-center m-5">
            <CountriesList countries={ countries }/>
            <Routes>
              <Route path="/" element={ <div className="w-50 mx-5"></div> }></Route>
              <Route path="/:countryCode" element={ <CountryDetails countries={ countries }/> }></Route>
            </Routes>
          </div>
      }



    </div>
  );
}

export default App;
