
// import './App.css';
import Navbar from './Navbar'
import CountriesList from './CountriesList'
import countries from '../countries.json';
import CountryDetails from './CountryDetails'
// import { Link, Route } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
   
     <div className="App">
  <Navbar />

  <div className="container">
    <div className="row">
      <CountriesList exact path="/" countries={countries} />
      <Router>
      <Route  path="/countries/:countryCode" component={CountryDetails}/>
  </Router>
     
    </div>
  </div>
</div>
      
    
  );
}

export default App;
