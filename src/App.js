import logo from './logo.svg';
import './App.css';
import countries from '../src/countries.json';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <Routes> */}
      <CountriesList></CountriesList>
      {/* </Routes> */}
    </div>
  );
}

export default App;
