import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/navbar.jsx'
import CountriesList from './components/CountriesList/countriesList.jsx'
import CountryDetails from "./components/CountryDetails/countryDetails.jsx"
import { Route, Routes } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from 'axios'

function App() {
  
  // const [countries, setCountries] = useState('')

  // useEffect(() => {
  //   getCountries();
  // }, [])

  // const getCountries = () => {
  //   axios.get('https://ih-countries-api.herokuapp.com/countries')
  //     .then(res => {
  //       setCountries(res.data)

  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/:idCountry' element={<CountryDetails />} />
      </Routes>
      <CountriesList/>
      
    </div>

     
       
  );
}

export default App;
