import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import countries from "./countries.json"
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <CountriesList countriesJSON={countries} />
        <Routes>
          <Route path="/country/:countryCode" element={<CountryDetails countriesJSON={countries} />} />

        </Routes>
        
      </div>

      
    </div >
  );
}

export default App;
