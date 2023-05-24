import './App.css';
import { Route, Routes } from 'react-router-dom';
import Axios from 'axios';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountriesDetails from './components/CountryDetails/CountryDetails'
import { useEffect, useState } from 'react';

function App() {

  const [countries, setCountries] = useState([])

  useEffect(() => {           

    Axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then(response => {
        setCountries(response.data)
      })
      .catch(error => {
        console.log('Error getting countries', error)
      })
  }, [setCountries])

  return (
    <div className="App">
      
      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col-4 ">
            <CountriesList countries={countries}/>
          </div>

          <div className="col-6">
            <Routes>
              <Route path='/:id' element={<CountriesDetails countries={countries}/>} />
            </Routes>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
