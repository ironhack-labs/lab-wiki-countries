import "./App.css";
import Navbar from "./components/Navbar";      
// import HomePage from "./pages/HomePage";      
import CountryDetails from "./components/CountryDetails";     
import ErrorPage from "./pages/ErrorPage";
import CountryList from "./components/CountryList";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from "react-router-dom";  

function App() {

  const [fetching, setFetching] = useState(true);
  const [countries, setCountries] = useState([]);
  const apiURL = "https://ih-countries-api.herokuapp.com/countries";

  useEffect(() => {
    console.log("useEffect - Initial render (Mounting)");
    axios
    .get(apiURL)
    .then((response) => {
      response.data.sort(function (a, b) {
        if (a.name.common < b.name.common) {
          return -1; //sort a after b (b 먼저)
        }
        if (a.name.common > b.name.common) {
          return 1;  //sort a before b (a 먼저)
        }
        return 0;
      });
      // console.log("DATA", response.data);
      setCountries(response.data);
      setFetching(false);
    });
  }, []);
  
  return (
    <div className="App">
      {fetching && <p>Loading ...</p>}
      <Navbar />
      
      <Routes>
      <Route path="/" element={<CountryList countries={countries} />} /> 
      <Route
              path="/countries/:alpha3code"
              element={<CountryDetails countries={countries} />}
            />
      </Routes>
    </div>
  );
}

export default App;
