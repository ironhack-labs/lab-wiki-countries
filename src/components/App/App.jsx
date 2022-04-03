import './App.css';
import { Routes, Route, Navigate } from 'react-router';
import NavBar from '../NavBar/NavBar';
import { CountriesList } from '../ContriesList/CountriesList';
import { CountryDetails } from '../CountryDetails/CountryDetails';

const App = () => {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="container">
        <div className="row">
          <CountriesList />
          <Routes>
            <Route path="/countries/:alpha3Code" element={<CountryDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;