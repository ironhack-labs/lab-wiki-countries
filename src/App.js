import './App.css';
import countries from './countries';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails'
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries}/>
            <Route path="/country/:cca3" render={(props) => <CountryDetails {...props} countries={countries}/>} />
        </div>
      </div>
    </div>
  );
}

export default App;