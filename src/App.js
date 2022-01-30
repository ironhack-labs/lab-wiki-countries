import './App.css';
import Navbar from './components/Navbar';
import data from './countries.json'
import CountriesList from './components/CountriesList';
import {Routes, Route} from 'react-router-dom';
import CountryDetails from './components/CountryDetails';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <CountriesList/>
      <Routes>
        <Route path = '/:countryCode' element = {<CountryDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
