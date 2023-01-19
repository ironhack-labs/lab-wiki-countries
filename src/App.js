import { useEffect } from "react";
import { Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from "./components/Navbar"
import countries from "./countries.json"
import axios from 'axios';
import { useState } from "react";
function App() {
  const [listOfCountries,setListOfCountries] = useState([]);
  const {alpha3Code} = useParams();
  const basicURL = "https://ih-countries-api.herokuapp.com/countries";
  useEffect(() => {
    axios
      .get(basicURL)
      .then((res) => {
        console.log(res.data);
        setListOfCountries(res.data)
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="App">

    <Navbar/>
    <div className="container">
       <div className="row">
       <CountriesList listOfCountries={listOfCountries} />
       <Routes>
        <Route path="/:alpha3Code" element={<CountryDetails/>} />
       </Routes>
       
       
      </div>
    </div>
    
   
    </div>
  );
}

export default App;
