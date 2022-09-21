import "./App.css";
import "./components/countriesList/CountriesList.css"
import "./components/countryDetails/CountryDetails.css"

import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/navbar/NavBar";
import CountriesList from './components/countriesList/CountriesList';
import CountryDetails from './components/countryDetails/CountryDetails';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="general">
        <div className="list">
          <CountriesList />
        </div>
        <div className="oneCountry">
          <Routes>
            {/* <Route path='/' element={<CountriesList />} /> */}
            <Route path='/:idCountry' element={<CountryDetails />} />
          </Routes>
          {/* React-Router Route rendering the CountryDetails should go here */}
        </div>
      </div>
    </div>
  )
}
export default App; 
