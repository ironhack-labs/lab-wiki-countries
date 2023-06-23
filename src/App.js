import './App.css';
import countries from './countries.json'
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { BrowserRouter as Router } from "react-router-dom";



function App() {


  return (
    <div className="App">
           <Navbar />
      <CountriesList countriesObj={countries} />
    </div>
        )
      }
      
      export default App;