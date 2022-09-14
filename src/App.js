import "./App.css";
import CountriesList from "./components/CountriesList";
import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom'
import axios from "axios";
//import countries from "./countries.json"
import CountryDetails from "./components/CountryDetails";
import { useState, useEffect } from "react";

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        //console.log("response:", response.data)
        const sortedData = response.data.sort((a, b) => { return a.alpha3Code - b.alpha3Code })
        //console.log("sortedData",sortedData)
        setCountries(sortedData)
      })
      .catch(err => console.log('error getting countries list:', err))
  }, [])

  const divStyle = { maxHeight: '90vh', overflow: 'scroll' }

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-5" style={divStyle}>
            <div className="list-group">
              <CountriesList countries={countries} />
            </div>
          </div>
          <Routes>
            <Route path="/:a3" element={<CountryDetails data={countries} />} />
          </Routes>
        </div>
      </div>



    </div>
  )
}
export default App;