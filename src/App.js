import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';
import countries from './countries.json';
import { Switch, Route } from 'react-router-dom';

function App() {
  //console.log('app countries', countries)
  return (
    <div className="App">
      <Navbar className="App-header"/>

      <CountriesList countries={countries}/>
    
      <Switch>
        <Route exact path='/' component={CountriesList} />
        <Route exact path='/countries/:id' component={CountryDetail}/>
      </Switch>

      <footer className="App-footer sticky-bottom mt-3">
        <p>Ironhack Lab developed by <a className="App-link" href='https://github.com/xavirepi' target='_blank'>Javier Repilado</a> using React <img src={logo} className="App-logo" alt="logo" /></p>
      </footer>
    </div>
  );
}

export default App;
