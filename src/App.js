import logo from './logo.svg';

import NavBar from './componets/navbar/Navbar';
import CountriesList from './componets/listCountrie/CountriesList';
import { Switch, Route } from 'react-router-dom'
import CountryDetails from './componets/CountryDetails';
import countries from './countries.json'

function App() {
  return (<div >

    <NavBar />
    <div className = "painel">
      <CountriesList />
      <Switch>
        <Route exact path='/:cca3' render={(props) => <CountryDetails {...props} countries={countries} />} />
      </Switch>
    </div>
  </div>
  );
}

export default App;
