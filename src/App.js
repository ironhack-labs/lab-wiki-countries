import './App.css';
import CountriesList from './components/CountriesList/CountriesList';
import NavBar from './components/Navbar/Navbar'
import countriesData from "./countries.json";
import CountryDetails from './components/CountryDetails/CountryDetails';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';




function App() {




  return (
    <div className="App">
      <NavBar />

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <CountriesList />
          </div>
          <div className="col-md-6">
            <Routes>
              <Route path="/:id" element={<CountryDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
