import "./App.css";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import Countries from './countries.json';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';

// function NotFound() {
//   return <h1>404- Not Found </h1>
// }

function App() {
  // const [countries, setCountries] = useState([...Countries])
  const [states, setStates] = useState([])
  // const [st, setSt] = useState('')

  // const handleChange = e => {
  //   setSt(e.target.value)
  // }

  useEffect(() => {
    // fetch the data from the api
    axios.get('https://ih-countries-api.herokuapp.com/countries/')
      .then(response => {
        console.log(response.data)

        setStates(response.data)

      })
      .catch(err => console.log(err))
  }, [])



  return ( <div className="App">
    <Navbar />
    {/* <input type="text" onChange={handleChange} value={st}/> */}

    <div className="container col-12 ">
      <div className="row d-flex justify-content-around">
        <div className="col-6">
          <CountriesList countries={states} />
        </div>
        <div className="col-6">
          <Routes>
            <Route path='/' />
            <Route path='/:id' element={<CountryDetails countries={states} /> }  />  
            <Route path='*' element={<h1>404- Not Found </h1>} />
          </Routes>
        </div>
      </div>
    </div>
  </div>
  )
}

export default App;
