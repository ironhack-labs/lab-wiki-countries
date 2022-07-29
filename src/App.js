// src/App.js
import './App.css';
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import countriesArray from './countries.json';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <CountriesList />
    </div>
  );
}
export default App;
