import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import Countries from './countries.json';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CountriesList countriesList={Countries} />} />
        <Route
          path="/:countryId"
          element={<CountryDetails countriesList={Countries} />}
        />
      </Routes>
    </div>
  );
}

export default App;
