import { useState } from 'react';
import './App.css';
import Countries from './countries.json';
import NavBar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';

function App() {
  const [countries, setCountries] = useState(Countries);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<CountriesList countries={ countries} />} />
      </Routes>

    </div>
  );
}

export default App;
