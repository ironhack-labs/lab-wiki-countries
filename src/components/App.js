import './App.css';

import Navbar from './Navbar'
import CountriesList from './CountriesList'
import CountryDetails from './CountryDetails'

import { Switch, Route } from 'react-router-dom'

import countries from '../countries.json'

function App() {
  return (
    <>
      <Navbar />
      <div className = "container">
      <div className = "row">
        <div className = "col-5 countries-list">
          <div className = "list-group">
            <CountriesList countries={countries} />
          </div>
        </div>
        <div className = "col-7">
          <Switch>
            <Route path = "/:id" render = {props => <CountryDetails {...props} countries={countries}/>} />
          </Switch>
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
