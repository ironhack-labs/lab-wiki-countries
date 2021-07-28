import { Route, Switch } from 'react-router-dom';
import CountriesList from './components/countries/countries-list/CountriesList';
import Navbar from './components/navbar/Navbar';
import DetailCountry from './components/countries/detail-country/DetailCountry';

function App() {
  return (
    <div className="App">

    <Navbar />

    <CountriesList />

    <Switch >

      <Route exact path="/:cca3" component={DetailCountry}/>

    </Switch>

    </div>
  );
}

export default App;
