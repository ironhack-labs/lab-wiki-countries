
import './App.css';
import Navbar from './components/Navbar'; //iteration 1
import { Routes, Route } from 'react-router-dom';//iteration 1
import countries from './countries.json';
import CountriesList from './components/CountriesList';
import {useState,useEffect} from 'react';
import axios from 'axios';
import CountryDetails from './components/CountryDetails';

function App() {
  const [CountriesData, setCountriesData] = useState(null);
  
  useEffect(() => {
    let config = {
      method: 'get', url: 'https://ih-countries-api.herokuapp.com/countries',
    };

    axios(config) //The same that fetch, obtain json data
      .then((response) => {
        setCountriesData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!CountriesData){
    return <p>Loading pages</p>
  }
  return (
    <div className="App">
    <Navbar/> {/*iteration 1*/}
    <div className="container"></div>
        <div className="row">
        {<CountriesList countriesData={CountriesData} />}
          <Routes>
            <Route path="/:id" element={<CountryDetails countriesData={CountriesData} />} />
          </Routes>
        </div>
      </div>




    
   
  );
}

export default App;
