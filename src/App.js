import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countryJson from './countries.json';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="list">
        <CountriesList countries={countryJson} />
        <Routes>
          <Route path="/:cca2" element={<CountryDetails />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
