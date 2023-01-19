import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';
import Data from './countries.json';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <!-- Bootstrap container wrapper div --> */}
      <div className="container"></div>
      {/* <!-- Bootstrap row wrapper div --> */}
      <div className="row">
        <CountriesList data={Data} />
        <CountryDetails />
      </div>
    </div>
  );
}

export default App;
