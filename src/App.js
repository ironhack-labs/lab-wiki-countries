import './App.css';
import NavBar from './components/NavBar/NavBar';
import CountriesList from './components/CountriesList/CountriesList';
import countries from './countries.json';
import { Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails/CountryDetails';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div style={{display:'flex', justifyContent:'center'}}>
        <CountriesList data={countries}></CountriesList>
        <Route path="/:country">
          <CountryDetails data={countries}></CountryDetails>
        </Route>
      </div>
    </div>
  );
}

export default App;
