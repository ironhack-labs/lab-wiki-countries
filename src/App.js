import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import countries from './countries.json';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CountriesList countriesArr={countries} />
    </div>
  );
}

export default App;
