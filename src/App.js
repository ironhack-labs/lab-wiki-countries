import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';

import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row container">
        <CountriesList />

        <Route exact path="/countries/:countryName" component={CountryDetails} />
      </div>
    </div>
  );
}

export default App;
