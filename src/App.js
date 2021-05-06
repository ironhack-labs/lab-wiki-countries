import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import countries from './countries.json'
import {Route, Switch} from 'react-router-dom';
const countriesParsed = JSON.parse(JSON.stringify(countries))
function App() {
  // console.log(countriesParsed)
  return (
    <div className="App">
      <NavBar/>
      <div className="MainContent">
      <Switch>
        <Route exact path="/about/:id" component={CountryDetails} />
      </Switch>
      <CountriesList countries={countriesParsed}/>
      </div>
    </div>
  );
}

export default App;
