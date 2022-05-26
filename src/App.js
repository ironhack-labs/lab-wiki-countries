
import './App.css';
import Navbar from "./components/Navbar.jsx";
import countriesData from "./countries.json";
import { Routes, Route } from "react-router-dom";
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';



function App() {
  return (
    <div className="App">
    <Navbar/>
    <div className="container">
    <div className="row">
    <Routes>
<Route path="/" element={<CountriesList countriesData={countriesData}/>}></Route>

<Route path="/countries/:id" element={ <CountryDetails /> } />
   
    </Routes>
    </div>
  </div>
    </div>
  );
}

export default App;
