import "./App.css";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [countriesList, setCountriesList] = useState(null);

  useEffect (() => {
    axios.get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setCountriesList(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  })

  const renderList = () => {
    if (countriesList === null) {
      return <p>Loading....</p>;
    } else {
      return countriesList.map((element, index) => {
        return (
          <section key={index} className="card">
            <p>alpha2Code: {element.alpha2Code}</p>
            <p>alpha3Code: {element.alpha3Code}</p>
            <p>name: {element.name}</p>
            <p>area: {element.area}</p>
            <p>borders: {element.borders}</p>
            <p>capital: {element.capital}</p>
            <p>currencies: {element.currencies}</p>
            <p>independent: {element.independent}</p>
            <p>landlocked: {element.landlocked}</p>
            <p>languages: {element.languages}</p>
            <p>region: {element.region}</p>
            <p>unMember: {element.unMember}</p>
          </section>
        );
      });
    }
  };

  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink> | 
        <NavLink to="/:countryId">Country Details</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={HomePage}/>
        <Route path="/:countryId" element={CountryDetails} />
      </Routes>
      <div className="App">
        <h1>LAB | React WikiCountries</h1>
      </div>
      <HomePage countriesList = {renderList}/>
    </>
  );
}

export default App;
