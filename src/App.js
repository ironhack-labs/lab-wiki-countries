import './App.css';
import Navbar from './components/navbar/Navbar';
import CountriesList from './components/countries-list/CountriesList';
import CountryDetails from './components/country-details/CountryDetails';

import { Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <CountriesList></CountriesList>    
      <Route path="/countries/:cca3" component={CountryDetails}></Route>
      
    
    </div>
  );
}

export default App;
