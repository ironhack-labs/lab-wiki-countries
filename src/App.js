import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CountriesList />} />
        <Route path="/countriesDetails/:id" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
