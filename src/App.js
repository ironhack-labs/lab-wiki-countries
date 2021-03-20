import logo from './logo.svg';
import './App.css';
import CountriesList from './components/CountriesList';
import countriess from './countries.json';
import { Route, Switch } from 'react-router-dom';
import CountryDetails from './components/CountryDetails'
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';

function App() {
  const [allCountries ,  setAllCountries ] = useState(countriess);

  useEffect(()=>{},[allCountries])

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-5" style={{maxHeight: "90vh", overflow:"scroll"}}>
            <CountriesList countries={allCountries}/>
          </div>

          <div className="col-7">
            <Switch>
              <Route exact path='/country/:id' component={CountryDetails} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
