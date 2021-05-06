import './App.css';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json'

function App() {
  return (   
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries}/>
          <Route exact path='/:id' component={CountryDetails}/>
        </div>
      </div>
    </>
  );
}

export default App;
