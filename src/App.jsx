import "./App.css";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import HomePage from "./pages/HomePage";
import { useEffect, useState } from "react";




function App() {

  const [countries, setCountries] = useState(null);
  let baseUrl = "https://ih-countries-api.herokuapp.com"
  
  useEffect(()=>{
    axios.get(baseUrl + "/countries")
    .then((res)=>{
      setCountries(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <>
    <Navbar/>

    <Routes>
      <Route path = "/" element={<HomePage countries={countries}/>}/>
      <Route path = "/country/:alpha3Code" element={<CountryDetailsPage countries={countries}/>}/>
    </Routes>

    
    
      
    </>
  );
}

export default App;
