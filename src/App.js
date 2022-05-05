import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import CountriesList from './Components/CountriesList/CountriesList';
import CountryDetails from './Components/CountryDetails/CountryDetails';
import { useEffect, useState } from 'react'
import axios from 'axios'


function App() {

  const [countries, setCountries] = useState([])
  const [fetching, setFetching] = useState(true)

  useEffect(() => {
    fecthCountries()
  }, [])

  const fecthCountries = () => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then(({ data }) => {
        setCountries(data)
        setFetching(false)
      })
      .catch(err => console.log(err))
  }



  return (
    <div className="App">

      <Navbar />
      <div className="container">
        <div className="row">
          <Routes>
            <Route path='/' element={<CountriesList countries={countries} />} />
            <Route path='/:id' element={<CountryDetails countries={countries} />} />
          </Routes>
        </div>
      </div>



    </div >
  );
}

export default App;
