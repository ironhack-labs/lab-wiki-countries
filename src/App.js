import Navbar from './components/Navbar/Navbar'
import CountriesList from './components/CountriesList/CountriesList'
import CountryDetails from './components/CountryDetails/CountryDetails'
// import { Route, Routes } from 'react-router-dom';
// import countriesData from './countries.json'
import './App.css';

function App() {
  return (
    <div className="App">

      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <CountriesList />
          </div>
          <div className="col-md-5">
            <CountryDetails />
          </div>
        </div>
      </div>

    </div>

  );
}

export default App;
