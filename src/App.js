import { Route, Routes } from 'react-router-dom';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import countries from './countries.json'
import axios from 'axios';
import { useEffect, useState, } from 'react';



function App() {

  // const [Countries, setCountries ] = useState(null);

  // useEffect( () => {
  //   fetchCountries();
  // }, []);

  // const fetchCountries = () => {
  //   axios
  //     .get('https://ih-countries-api.herokuapp.com/countries')
  //     .then((response) => {
  //       console.log(response)
  //       const allCountries = response;
  //       setCountries(allCountries);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
            <Routes>
              <Route path="/">
                <Route path=":alpha3Code" element={<CountryDetails countries={countries} />}></Route>
              </Route>
            </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
