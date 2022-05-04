import { Route } from 'react-router-dom';
import "./App.css";
import Navbar from './components/Navbar'
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import countries from './countries.json'

function App() {
  return (
    <div className="App">
      <Navbar />

      <CountriesList countries={countries} />

      <Route path="/:id" country={<CountryDetails countries={countries} />} />

    </div>
  )
}

export default App;