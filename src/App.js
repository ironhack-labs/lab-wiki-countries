import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import countries from './countries.json'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
            <div className="row">
                <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll'}}></div>
                  <CountriesList countries={countries}/>
                <div className="col-7"></div>
            </div>     
        </div>
    </div>
  );
}

export default App;
