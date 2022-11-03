import { Route, Routes } from 'react-router-dom';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="d-flex">
        <CountriesList />

        <Routes>
          <Route path="/countries/:alpha3Code" element={<CountryDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
