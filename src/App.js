import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <!-- Bootstrap container wrapper div --> */}
      <div className="container"></div>
      {/* <!-- Bootstrap row wrapper div --> */}
      <div class="row">
        <CountriesList />
        <CountryDetails />
      </div>
    </div>
  );
}

export default App;
