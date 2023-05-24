import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import CountriesList from './Components/CountriesList/CountriesList';
import CountryDetails from './Components/CountryDetails/CountryDetails';
import { useState, useEffect } from "react"
import axios from 'axios';

function App() {

  const[countries, setCountries] = useState([])

  useEffect(()=>{
          axios
          .get("https://ih-countries-api.herokuapp.com/countries")
          .then(response => {
          setCountries(response.data)
      }).catch(err => console.log(err))
  },[])
  
  let isLoading = countries ? true : false
  console.log(isLoading)


  return (
    <div className="App">
      <NavBar/>
      
      <Routes>
           <Route path='/' element={<CountriesList countries={countries}/>}></Route> 
           <Route path='/:id' element={<CountryDetails/>}></Route> 
      </Routes>
      

    </div>
  );
}

export default App;
