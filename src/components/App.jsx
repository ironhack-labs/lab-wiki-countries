import { Route, Routes } from 'react-router-dom';
import './App.css'
import NavBar from './NavBar/NavBar';
import CountriesList from './CountriesList/CountriesList';
import CountryDetails from './CountryDetails/CountryDetails';
import axios from 'axios';
import { useEffect, useState } from 'react';



function App() {


  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then(({ data }) => {
        setCountries(data)
      })
      .catch(err => console.log(err))
  }, [])


  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-6">
            <CountriesList countries={countries} />
          </div>
          <div className='col-6'>
            <Routes>
              <Route path='/:id' element={<CountryDetails countries={countries} />} />
            </Routes>
          </div>
        </div>
      </div>

    </div>

  )
}

export default App;
