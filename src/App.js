import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './Components/Navbar'
import CountryDetails from './Components/CountryDetails';
import CountriesList from './Components/CountriesList';
import countries from './countries.json'

console.log('json', countries)
function App() {
  return (
    <>
    <Router>  
      <Navbar/>
      <div className='d-flex justify-content-center'>
      <CountriesList countries={countries}/>
      <Switch>
        <Route 
        path='/:theCountry'
        component={CountryDetails}
        exact/>
      </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
