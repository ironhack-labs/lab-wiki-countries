
import './App.css';
import { Route } from 'react-router-dom';
import { Navbar } from '../src/components/Navbar/Navbar';
import { CountriesList } from '../src/components/CountriesList/CountriesList';
import { CountryDetails } from '../src/components/CountryDetails/CountryDetails';



function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <CountriesList />
        <Route exact path="/:countryId">
          <CountryDetails />
        </Route>
        </div>
    </div>
  );
}

export default App;
