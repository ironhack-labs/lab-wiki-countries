import './App.css';
import Navbar from './components/NavBar';
import countries from './countries.json';
import CountriesList from './components/CountriesList';
import CountryDetails from "./components/CountryDetails"    
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="App">
        <Navbar />

        <div className="container">
          <div className="row">
            <CountriesList countries={countries}></CountriesList>

          <Switch>
            <Route path="/:cca3" render={(props) => (<CountryDetails {...props} countries={countries}/>)}/>
          </Switch>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
