
import './App.css';
import axios from 'axios';
import {useState} from 'react';
import {useEffect} from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countriesArr from './countries.json';



function App() {
  const [countries, setCountries] = useState([])

  const url = "https://ih-countries-api.herokuapp.com/countries"

  useEffect(()=>{
    axios.get(url).then((response)=>{
      setCountries(response.data);
    })
    .catch();
  }, []);

  return (
    <div className="App">
 <Navbar/>
 <div className="l-r">
 <CountriesList data={countries}/>
 <Routes>
   <Route path='/:code' element={<CountryDetails data={countries}/>}/>
 </Routes>
 </div>
 
 
 
    </div>
  );
  }

  export default App;
