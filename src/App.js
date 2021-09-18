import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import help from './countries.json';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries([...help]);
  }, []);

  return (
    <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <div
              className="col-5"
              style={{ overflow: 'scroll', maxHeight: '90vh' }}
            >
              <CountriesList countries={countries} />
            </div>
            <Switch>
              <Route
                path="/:cca3"
                render={(routeProps) => 
                  <CountryDetails {...routeProps} countries={countries} />
                }
              />
            </Switch>
          </div>
        </div>
    </div>
  );
}

export default App;