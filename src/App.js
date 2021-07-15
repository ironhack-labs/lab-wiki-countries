import logo from './logo.svg';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import axios from "axios";
import { Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [ countries, setCountries ] = useState([]);

  useEffect(async () => {
      try {
          let countries = await axios.get('https://restcountries.eu/rest/v2/all');
          setCountries(countries.data)
      }
      catch(error) {
          throw new Error('Something went wrong during fetching of the countries', error)
      }
  }, [])

  return (
      <div>
        <Navbar />
        <div style={{ display: "flex"}}>
          <CountriesList countries={countries} />
          <Route path={"/country/:cca"} render={(routeProps) => { 
              return <CountryDetails countries={countries} routeProps={routeProps} />
      }} />
        </div>
      </div>
  );
}

export default App;


//          {/* <Route path={"/country/:cca"} component={CountryDetails} />  */}