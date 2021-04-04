import './App.css';
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import Router from './components/Router'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
        <CountriesList />
        <Router />
        </div>
      </div>
    </div>
  );
}

export default App;
