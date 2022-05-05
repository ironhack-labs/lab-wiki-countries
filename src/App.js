
import './App.css';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom'
// import countries from "./countries.json"
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {
  const [contriesData, setCountriesData] = useState([])

  useEffect(() => {
    fecthCountries()
  }, [])

  const fecthCountries = () => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries`)
      .then(({ data }) => {

        setCountriesData(data)
      })
      .catch(err => console.log(err))

  }
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<CountriesList contriesData={contriesData} />} />
        <Route path='/:countryId' element={<CountryDetails contriesData={contriesData} />} />
      </Routes>



    </div >
  );
}

export default App;
