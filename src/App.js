import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import countriesFromDB from './countries.json'

function App() {
  return (
    <div className="App">
      {<Navbar />}
      {<CountriesList countries={countriesFromDB} />}
    </div>
  );
}

export default App;
