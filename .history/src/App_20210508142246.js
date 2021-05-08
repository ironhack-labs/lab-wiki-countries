import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';

//funcio
function App() {

  refreshState() {
    
  }
  componentDidMount() {
    this.refreshState();
  }
  return (
    <div>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/countries" component={CountriesList} />
          <Route exact path="/:id" component={CountryDetails} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
