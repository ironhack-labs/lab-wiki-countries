import './App.css';
import Navbar from './Navbar';
import CountriesList from './CountriesList'
import CountryDetails from './CountryDetails'

import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar />
      <CountriesList />
      <Switch>
        <Route path="/:cca3" render={props => <CountryDetails{...props}/>} />
      </Switch>
    </div>
  );
}

export default App;
