import './App.css';
import { Route, Switch } from 'react-router-dom';

import NavBar from './Components/NavBar'
import CountriesList from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="row">
        <CountriesList />
          <Switch>
            <Route 
              exact 
              path="/:id"
              component={CountryDetails}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
