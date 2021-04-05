import { Route, Switch } from 'react-router';
import './App.css';
import CountriesList from './components/CountriesList';
import NavBar from './components/NavBar';
import countries from './countries.json'
import CountryDetails from './components/CountryDetails'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <CountriesList countries={countries}/>
          </div>
          <div className="col-sm-6">
            <Switch>
              <Route path="/:cca3" render={(props) => <CountryDetails {...props}/>} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
