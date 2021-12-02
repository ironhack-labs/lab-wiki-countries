import './App.css';
import CountriesList from './components/CountrieList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import countries from './countries.json'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="container">
        <div class="row">
          <CountriesList countries={countries} />
    
        </div>
      </div>      
      <div class="col-7">
      <CountryDetails countries={countries}/>
      </div>
     Holi
    </div>
  );
}

export default App;
