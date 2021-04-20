import logo from './logo.svg';
import './App.css';

// EXEMPLOS APAGAR DEPOIS
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

// ROUTER IMPORTS
import { BrowserRouter, Route } from 'react-router-dom';
import list from './countries.json';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="page-elements">
        <BrowserRouter>
          <CountriesList countries={CountriesList} />
          <Route path="/:cca3" component={CountryDetails} />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
