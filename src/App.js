import './App.css';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <CountriesList />

          <Routes>
            <Route path="/:country" element={<CountryDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
