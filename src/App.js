// src/App.js
import NavBar from './NavBar.js';
import CountriesList from './CountriesList.js';
import CountryDetails from './CountryDetails.js';
import './App.css';
import countries from './countries.json';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CountriesList listOfCountries={countries} />
      <CountryDetails />
      <Routes>
        <Route exact path=":id" render={() => <CountryDetails />} />
      </Routes>
    </div>
  );
}
export default App;
