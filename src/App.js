import './App.css';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:countryId" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
