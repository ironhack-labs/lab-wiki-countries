import './App.css'
import data from './countries.json';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  const countries = data;

  return (
    <div className="App">
     <Navbar/>
      
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route path="/:code" element={ <CountryDetails countries={countries}/> } />
            
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
