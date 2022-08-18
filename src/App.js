import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';


function App() {
  return (
    <div className="App">
      <NavBar />
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <CountriesList />
        <div className="container">
          <div className="row">
            <Routes>
              <Route path="/:countryId" element={<CountryDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


