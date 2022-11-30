
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';

import { Route, Routes } from 'react-router-dom';






function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<CountriesList />} />
        <Route path="/details/:alpha3Code" element={<CountryDetails />} />
      </Routes>

    </div>

  );
}

export default App;
