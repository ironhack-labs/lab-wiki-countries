import './App.css';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import Navbar from './components/Navbar/Navbar';
import json from './countries.json';
import { Route, Switch } from 'react-router';

function App() {
  return (
    <div className="App">
      <Navbar />      
      <div className="container">
        <div className="row">
          <CountriesList countries={json}/>
          <Switch>
            <Route exact path="/:cca3" component={CountryDetails} countries={json} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
