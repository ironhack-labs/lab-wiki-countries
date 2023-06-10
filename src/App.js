// src/App.js
import './App.css';
import countries from './countries.json';
import CountriesList from './components/CountriesList';

function App() {
  return (
    <div className="App">
      <CountriesList countries={countries} />
    </div>
  );
}
export default App;
