import './App.css';
import { CountriesList, Navbar } from './components';
import RootRoutes from './RootRoutes';
import countriesJson from './countries.json'

function App() {
  return <div className="App">
    <Navbar />
    <div className="container">
      <div className="row">
        <CountriesList countries={countriesJson} />
        {/* la ruta nested */}
        <RootRoutes />
      </div>
    </div>
  </div>;
}

export default App;
