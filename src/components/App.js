
import './App.css';
import Navbar from './Navbar'
import CountriesList from './CountriesList';
import { Switch, Route } from 'react-router-dom';
import CountryDetails from './CountryDetails';


function App() {
  return (
    <div className="App">
      <Navbar />
      <CountriesList />
      <CountryDetails />

      <Switch>
        <Route path="/detalles/:cca3/" render={(props) => <CountryDetails {...props} />}/>
      </Switch>
    </div>
  );
}

export default App;
