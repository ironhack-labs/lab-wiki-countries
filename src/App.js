
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

import { Routes, Route} from 'react-router-dom';

function App() {
  const [countries, setCountrylist] = useState([]);

  useEffect(() => {
    fetch("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => 
        response.json())
      .then((data) => {
          data.sort((a, b) => a.name.common.localeCompare(b.name.common));
          setCountrylist(data);
      });
    },[]);


    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col">
              <CountriesList countries={countries} />
            </div>
            <div className="col">
              <Routes>
                <Route path="/:id" element={<CountryDetails />} />
                {/* React-Router Route rendering the CountryDetails should go here */}
              </Routes>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default App;
