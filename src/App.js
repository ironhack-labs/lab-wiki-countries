import "./App.css";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import countries from "./countries.json"
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function App() {

 useEffect(() => {
    const listOfCountries = fetch(
      'https://ih-countries-api.herokuapp.com/countries',
      { method: 'GET' }
    )
      .then((countries) => {
       return countries.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return <div className="App">
         <Navbar />
         <Routes>
        <Route path="/" element={<CountriesList countries={countries}/>} />
        <Route 
          path="/countries/:id" 
          element={ <CountryDetails countries={countries}/> } 
        /> 
      </Routes>

  </div>;
}
export default App;