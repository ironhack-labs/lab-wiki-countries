import './App.css';
import countries from '../countries.json'
import Navigation from './Navbar/Navbar';
import CountriesList from './CountriesList/CountriesList'
import CountriesDetailPage from './CountryDetails/CountryDetails'
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';


function App() {

  const [country, setCountry] = useState([])

  useEffect(() => {
    axios.get('https://ih-countries-api.herokuapp.com/countries')
      .then(({ data }) => {
        console.log(data)
        setCountry(data)
      })
      .catch((err) => console.log(err))
  }, [])




  return (
    <div className="App">

      <Navigation />

      <div className="container">
        <div className="row">
          <div className='col-4'>
            <CountriesList lol={country} />
          </div>
          <div className='col-8'>


            <Routes>

              <Route path='/:countriesId' element={<CountriesDetailPage lol={country} />} />

            </Routes>

          </div>

        </div>
      </div>
    </div>
  )

}
export default App;
