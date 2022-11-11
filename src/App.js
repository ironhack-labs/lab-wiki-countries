import './App.css';
import Countries from './components/Countries';
import Navbar from './components/Navbar';

import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import { useState } from 'react';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const handleSearch = (event) => {
    setSearchInput(event.target.value);
  };
  return (
    <>
      <Navbar {...{ handleSearch, searchInput }} />
      <Routes>
        <Route path="/" element={<Countries {...{ searchInput }} />}>
          <Route path="/:countryCode" element={<CountryDetails />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
