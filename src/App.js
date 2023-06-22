import logo from './logo.svg';
import './App.css';
import countries from "./countries.json"
import NavBar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { useState } from 'react';



function App() {

  const [listOfCountries, setListOfCountries] = useState(CountriesList);

  console.log(listOfCountries)
  
  return (
    <div className="App">
     <NavBar></NavBar>

     {/* <CountriesList listOfCountries={listOfCountries}></CountriesList> */}
    </div>
  );
}

export default App;
