import { Route, Routes } from 'react-router-dom';
import './App.css';
import { CountriesList } from './components/CountriesList';
import { Navbar } from './components/Navbar';
import countriesList from './countries';
import { useState } from 'react';
import { CountryDetails } from './components/CountryDetails';

function App() {
  const [countries, setCountrie] = useState(countriesList);
  return (
    <div className="App">
      <Navbar />
      <CountriesList list={countries} />
      <Routes>
        <Route
          path="http://localhost:3000/:id"
          element={<CountryDetails />}
          
        />
      </Routes>
    </div>
  );
}

export default App;
