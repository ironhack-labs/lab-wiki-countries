import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import CountryDetailsPage from "./pages/CountryDetailsPage";

import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <h1>LAB | React WikiCountries</h1>
      <Navbar />


      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='//:countryId' element={<CountryDetailsPage />} />
      </Routes>

    </div>



  );
}

export default App;
