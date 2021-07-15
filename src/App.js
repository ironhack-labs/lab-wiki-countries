import './App.css';
import Navbar from './components/Navbar';
import { Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList/>
          
          <Route exact path={'/countries'} component={CountriesList}/>
          <Route path={'/countries/:id'} component={CountryDetails}/>
        </div>
      </div>
    </div>
  );
}

export default App;
