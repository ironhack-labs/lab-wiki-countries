import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import { Route, Routes } from 'react-router-dom';
import countries from './countries.json'
import axios from 'axios';

function App() {

  /* const getCountries = async () => {
    try {
      let response = await axios.get(` https://ih-countries-api.herokuapp.com/countries`);
      setCountry(response.data);
     
    } catch (error) {
      console.log(error);
    }
  }; */
  
  return (
    <div className="App">
        <NavBar/>
      <Routes>
        <Route path="/countries" element={ <CountriesList countries={countries} />} />
        <Route path="/countries/:countryId" element={ <CountryDetails /* countryList = {countryList} *//>}/>
      </Routes>
    </div>
  );
}

export default App;
