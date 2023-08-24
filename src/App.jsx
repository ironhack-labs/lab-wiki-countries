import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CountryDetails from './pages/CountryDetailsPage';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:countryId" element={<CountryDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
