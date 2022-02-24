// src/App.js
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';


function App() {
  return (
    <div className="App">
      <Navbar />
      <CountriesList />

      {/* <Routes>
        <Route 
        path="/countries/:countryId"
        element={ <CountryDetails /> }
        />

      </Routes> */}
    </div>
  );
}
export default App;
