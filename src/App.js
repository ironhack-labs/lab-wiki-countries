import './App.css';
import countries from './countries.json'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountryList from './components/CountriesList';

function App() {
  return (
    <div className="App">
       <Navbar/>
         <CountryList/>
    </div>
  );
}

export default App;
