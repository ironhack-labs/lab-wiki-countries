import "./App.css";
import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CountryDetailsPage from "./pages/CountryDetailsPage";

function App() {
  return (
    <div className="App">
       <Navbar />
      <h1>LAB | React WikiCountries</h1>

     
       <Routes>
          <Route path='/' element={<HomePage />} /> 
          <Route path='/:countryId/:alpha3Code' element={<CountryDetailsPage />} />

       </Routes>
    </div>
  );
}

export default App;
