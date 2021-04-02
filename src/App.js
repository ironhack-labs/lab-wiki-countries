import CountryList from './components/Sidebar/CountryList';
import Navbar from './components/Navbar/Navbar';
import Router from './components/Router/Router';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div>
        <CountryList/>
      </div>
      <div>
        <Navbar />
        <Router />
      </div>
    </div>
  );
}

export default App;

// switch renderiza lo primero que matchea
// Navlink activeClassName="active" clase que le aplica si es la ruta activa.