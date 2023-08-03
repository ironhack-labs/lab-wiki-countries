import './App.css'
import countries from './countries.json'
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <div className="container">
        <div className="row">
          <CountriesList countriesData={countries} />
        </div>
      </div>
    </div>
  );
}

export default App