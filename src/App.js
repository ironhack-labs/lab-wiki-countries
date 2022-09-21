import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {

  return (
    <div className="App">
      <NavBar />
      <div class="container">
        <div class="row">
          <CountriesList />
          <Routes>
            <Route path="/:idCountry" element={<CountryDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );

}

export default App;
