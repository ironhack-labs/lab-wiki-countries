import logo from './logo.svg';
import './App.css';
import countries from './countries.json'
import { Navbar } from './components/Navbar';
import { CountriesList } from './components/CountriesList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CountriesList countries={countries} />
    </div>
  );
}

export default App;
