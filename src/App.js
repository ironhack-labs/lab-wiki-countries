import "./App.css";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react/cjs/react.production.min";
import { Routes, Route } from 'react-router-dom';
import axios from "axios";

function App() {
  return <div className="App"></div>;

  const [countriesArray, setCountriesArray] = useState([]);

  const countriesApiUrl = "https://ih-countries-api.herokuapp.com/countries";

  useEffect(() => {
      axios
        .get(countriesApiUrl)
        .then(res => setCountriesArray(res.data))
        .catch(err => console.log(err))
  }, []);


  return <div className="App">
    <Navbar />
    <div className="container"> 
      <div className="row">
        <div className="col-5" style={{
          maxHeight: '90vh',
          overflow: 'scroll'
        }}> 
          <CountriesList countriesArray={countriesArray}/>
        </div>
        <div className="col-7">
          {/* <CountryDetails /> */}
          <Routes>
            {/* <Route path="/:countryCode" element={ <CountryDetails countriesArray={countriesArray} /> } /> */}
          </Routes>
        </div>
      </div>
    </div>
  </div>;
}
export default App; 