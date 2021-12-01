import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

import countries from './countries.json';
import {Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <CountriesList countries={countries} />
      </div>
      <Routes>
          <Route path="/country/:cca3" render={(props) => <CountryDetails {...props} />} />
      </Routes>
      
       
    </div>
  );
}

export default App;
