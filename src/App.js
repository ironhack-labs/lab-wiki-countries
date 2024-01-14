import './App.css';
import Navbar from './components/Navbar';
import countriesJson from "./countries.json"
import CountriesList from './components/CountriesList';
import { Routes, Route } from "react-router-dom";
import CountryDetails from './components/CountryDetails';

function App() {

  return (
    <>
    <div className="App">
    </div>
    <Navbar/>
    <Routes>
    <Route path="/" element={  <CountriesList />}/>
        <Route path="/:id" element={<CountryDetails/>}/>
        </Routes>
    </>
  );
}


export default App;
