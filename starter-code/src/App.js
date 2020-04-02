import React from 'react';
import { Switch, Route} from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import Country from './components/Country';

function App() {
  return (
    <div className="App">
      <CountryDetails/>
      <Switch>
      <Route exact path='/:id' component={Country}/>
      </Switch>
    </div>
  );
}

export default App;
