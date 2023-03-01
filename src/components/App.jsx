import './../components/App.css'
import countries from './../countries.json'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import CountriesList from './CountriesList/CountriesList'
import CountryDetails from './CountryDetails/CountryDetails'






function App() {


  const [apiCountries, setApiCountries] = useState([])



  useEffect(() => {
    axios.get('https://ih-countries-api.herokuapp.com/countries ')

      .then(response => {

        setApiCountries(response.data)
      })
      .catch(err => { console.log(err) })

  }, [])


  return (
    <div className="App">

      <Navbar />

      <div className="container">

        <div className="row">

          <CountriesList countries={countries} />

          <Routes>
            <Route path='/:id' element={<CountryDetails countries={countries} />} />
          </Routes>

        </div>
      </div>

    </div>

  )

}
export default App;