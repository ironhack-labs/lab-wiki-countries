import './App.css';
import NavBar from './components/NavBar/NavBar';
import CountriesList from './components/CountriesList/CountriesList';
import { useEffect, useState } from 'react';
import axios from "axios"
import CountryDetails from './components/CountryDetails/CountryDetails';
import { Routes, Route} from 'react-router-dom'


function App() {
  const [countries, setCountries] = useState([])

  useEffect(()=>{
    axios.get("https://ih-countries-api.herokuapp.com/countries")
      .then((resp)=>{
        setCountries(resp.data)
      })
  }, [])

  return (
    <div className="App">
    <NavBar></NavBar>
      <Routes>
      <Route path='/' element={<div className='centered'><CountriesList countries={countries} setCountries={setCountries}/></div>}/>
      <Route path='/:countryId' element={<div className='flex' > <CountriesList countries={countries} setCountries={setCountries}/>
        <CountryDetails countries={countries} setCountries={setCountries}/>
      </div>}/>
      </Routes>
    </div>
  );
}

export default App;
