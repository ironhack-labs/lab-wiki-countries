import "./App.css";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Countries from './countries.json';
import 'bootstrap/dist/css/bootstrap.css';

// function NotFound() {
//   return <h1>404- Not Found </h1>
// }

function App() {
  const [countries, setCountries] = useState([...Countries])
  return ( <div className="App">
    <Navbar />
    <div className="container col-12 ">
      <div className="row d-flex justify-content-around">
        <div className="col-6">
          <CountriesList countries={countries} />
        </div>
        <div className="col-6">
          <Routes>
            {/* <Route path='/' element={<CountriesList countries={countries} />} /> */}
            <Route path='/:id' element={<CountryDetails countries={countries} /> }  />  
            <Route path='*' element={<h1>404- Not Found </h1>} />
          </Routes>
        </div>
      </div>
    </div>
  </div>
  )
}

export default App;
