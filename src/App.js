import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/countries/:countryId" element={<CountryDetails />} />
      </Routes>

      <Navbar />
      <CountriesList />
    </div>
  );
}

export default App;
