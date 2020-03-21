import React from 'react';
// import { Switch, Route} from 'react-router-dom'
import Country from './components/Countries'
// import CountryDetails from './components/CountryDetails'
import countries from './countries.json'

import './App.css';

function App() {

  return (
    <div className="App">
      <Country countries={countries}/>
      {/* <Switch>
            <Route exact path="/country/:id" component={CountryDetails}/>
      </Switch> */}
    </div>
  );
}

export default App;
