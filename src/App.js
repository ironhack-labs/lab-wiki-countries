import './App.css';
// import data from "./countries.json";
import {useState} from "react";
import Navbar from "./components/Navbar"
import CountriesList from "./components/CountriesList"
import {Routes,Route} from "react-router-dom"
import CountryDetails from './components/CountryDetails';

function App() {
  // const [countries, setCountries] = useState(data);
  return (
    <div className="App">
      <Navbar/>
        <div className="container">
            <div className="row">
              <CountriesList />
              <Routes>
                <Route path="/:id" element={<CountryDetails />}/>
              </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
