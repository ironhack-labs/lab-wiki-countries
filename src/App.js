import axios from 'axios';
import './App.css';
import Navbar from './Components/Navbar';
import CountriesList from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails';
import  {useState, useEffect} from "react";

/* const {countries, serCountries} = useState([]); */



function App() {
  return (
    <div className="App">
     
     <Navbar/>
<CountriesList />
   
              






 </div>            
            
  );
}

export default App;
