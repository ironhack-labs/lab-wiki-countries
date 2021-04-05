import './App.css';
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import Router from './components/Router'
import data from './countries.json'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
        <CountriesList countries={data}/>
        <Router />
        </div>
      </div>
    </div>
  );
}

export default App;
