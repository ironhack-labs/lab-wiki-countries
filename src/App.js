import './App.css';
import Navbar from './components/Navbar';
import Links from './components/Link';
import CountryDetails from './components/CountryDetails';
import Router from './components/Router';
import countries from './countries.json';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div
            className="col-5"
            style={{ maxHeight: '90vh', overFlow: 'scroll' }}
          >
            <div className="list-group">
              {countries.map((c) => (
                <Links key={c.cca3} {...c} />
              ))}
            </div>
          </div>
          <Router />
        </div>
      </div>
    </div>
  );
}

export default App;
