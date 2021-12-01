// import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';
import { Switch, Route } from 'react-router-dom'


function App() {
  
  return (
    <div className="App">
  <Navbar />
  

  <div className="container">
    <div className="row">
      <CountriesList countries = { countries }/>
    </div>
  <div>
    <Switch> 
          <Route path="/country/:cca3"  render={(props) => <CountryDetails {...props} countries={countries} />} />
          
    </Switch>
  </div>
  </div>
</div>


  )
  
}



export default App;
