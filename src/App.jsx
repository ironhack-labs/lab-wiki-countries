import './App.css';
import NavBar from './components/NavBar';

import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';
import{useState,useEffect} from 'react'
import axios from 'axios'

function App() {
  const [countries, setCountries] = useState([]);

  const countriesApiUrl = 'https://ih-countries-api.herokuapp.com/countries';

  useEffect(() => {
    axios
      .get(countriesApiUrl)
      .then((res) => setCountries(res.data))
      .catch((err) => console.log(err));
  }, []);
 
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        {/* need row here cause if we dont have the columns wont work */}
        <div className="row">
          <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
            <CountriesList countriesArray={countries}/>
          </div>
          <div className="col-7">
      <Routes>
      <Route path="/:countryId" element={<CountryDetails countriesArray={countries} />}/>
      </Routes>
            {/* <CountryDetails /> */}
          </div>
        </div>
      </div>

      {/* <Routes>
        <Route
          path="/countries"
          element={<CountriesList countries={countriesJSON} />}
        />

        <Route path="countries/:id" element={<CountryDetails />} />
      </Routes> */}
    </div>
  );
}

export default App;
