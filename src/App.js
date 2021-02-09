import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from "./components/CountryDetails"

import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container row col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
      <Route exact path="/">
      <CountriesList />
      </Route>
      <Route path="/:countryName" component={CountryDetails}></Route>
      </div>
    </div>
  );
}

export default App;
