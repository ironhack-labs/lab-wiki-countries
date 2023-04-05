import './App.css';
import CountriesList from './components/CountriesList/CountriesList';
import countries from './countries.json'
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <CountriesList countries={countries} />
    </div>
  );
}

export default App;
