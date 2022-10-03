import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import countriesArray from './countries.json'
import {useState,useEffect} from 'react'
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import {Routes,Route,useParams} from 'react-router-dom'

function App() {
  const [countries,setCountries] = useState('')
  useEffect(() => {
    fetch('https://ih-countries-api.herokuapp.com/countries')
    .then(res => res.json())
    .then(json => setCountries(json))
    .catch(err => console.log('Error fetching countries data', err))
  }, [countries])
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<CountriesList countries={countries}/>}/>
        <Route path='/country-details/:countryId' element={<CountryDetails countries={countries} setCountries={setCountries}/>}/>
      </Routes>
    </div>
  );
}

export default App;
