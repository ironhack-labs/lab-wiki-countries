import './App.css';
import {Switch, Route} from "react-router-dom"
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  
  
  
  return (
    <>
      <CountriesList/>
      <Route path="/countryDetails/:id" component={CountryDetails}/>
    
      
    </>
  );
}

export default App;
