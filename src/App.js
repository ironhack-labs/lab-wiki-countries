import './App.css';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
//import CountryDetails from './components/CountryDetails/CountryDetails';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);

  const countriesAPI = 'https://ih-countries-api.herokuapp.com/countries';

  const getCountries = async () => {
    try {
      let response = await axios.get(countriesAPI);
      setCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div className="App">
      <Navbar></Navbar>

      <div className="container ">
        <div className="row">
          <CountriesList countries={countries} />
        </div>
      </div>
    </div>
  );
}

export default App;
