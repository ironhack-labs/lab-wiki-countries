import logo from './logo.svg';
import './App.css';
import countriesJSON from './countries.json'
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import {useState, useEffect} from 'react'

function App() {

/*const [countriesArr, setCountriesArr] = useState(countriesJSON) //Original code upto iteration 3
useEffect(()=>{
  setCountriesArr(countriesJSON)
},countriesJSON)*/


const [apiCountries, setApiCountries] = useState([]) 

const fetchCountryData = () => {
  fetch("https://ih-countries-api.herokuapp.com/countries")
    .then(response => {
      return response.json()
    })
    .then(data => {
        setApiCountries(data)
    })
}

useEffect(()=>{
  fetchCountryData()
},[])



  return (
    <div className="App">
      <NavBar />
      <CountriesList countries={apiCountries} />
   
    </div>

  );
}

export default App;