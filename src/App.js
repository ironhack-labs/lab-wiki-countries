import "./App.css";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState(null)

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = () => {
    axios.get('https://ih-countries-api.herokuapp.com/countries')
      .then(response => {
        setCountries(response.data)
      })
      .catch(e => {
        console.log(e)
      })
  }


  return (
    <div className="App">

      <Navbar />


      <Routes>
        <Route path='/' element={!!countries && <CountriesList data={countries} />}></Route>
        <Route path='/:countryId' element={<CountryDetails data={countries} />}></Route>
      </Routes>

    </div>
  )
}
export default App;