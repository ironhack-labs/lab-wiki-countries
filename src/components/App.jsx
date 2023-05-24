import './App.css';
import NavBar from './NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './CountryDetails/CountriesDetails';
import CountryList from './Countries/Countries';
import { useEffect, useState } from "react"


function App() {
  const [countriesArray, setCountries] = useState([])
  useEffect(() => {
    fetch("https://ih-countries-api.herokuapp.com/countries")
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(err => console.log(err))
  }, [])

  console.log("hola", countriesArray)
  return (
    <div>
      <NavBar />
      <div className="container mt-4">
        <div className='row'>
          <div className='col-md-6'>

            <CountryList countries={countriesArray} />
          </div>
          <Routes>
            <Route path='/:id' element={<CountryDetails countrys={countriesArray} />} />
          </Routes>
        </div>

      </div>

    </div>
  );
}

export default App;
