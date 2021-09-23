import './App.css';
import Navbar from './components/Navbar/Navbar'
import  { Switch, Route, Redirect } from 'react-router-dom';
import CountriesList from './components/Countries list/CountriesList';
import CountryDetails from './components/Countrydetails/CountryDetails';

function App() {
  return (
    <div className="App">
    
    <Navbar />
    <Route exact path="/countries-list" render={() => <CountriesList />} />
    <Route exact path="/countries-list/:countryCca3" render={(props) => <CountryDetails {...props} />} />
    
    </div>
    
  );
}

export default App;
