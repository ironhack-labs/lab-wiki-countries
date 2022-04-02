import './App.css';
import { Routes, Route } from 'react-router'
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetail from './components/CountryDetail/CountryDetail';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CountriesList />} />
        <Route path="/countries/:name" element={<CountryDetail />} />
      </Routes>
    </div>
  );
}

export default App;
