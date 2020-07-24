import React from 'react';
import './App.css';
import CountriesList from './CountriesList';
import { Switch, Route} from "react-router-dom";
import CountryDetail from './CountryDetail';

function App() {
  return (
    <div className="App">
        <div className="row">
          <div className="col-5">
            <CountriesList />
          </div>
          <div className="col-7">
            <Switch>
              <Route
                exact
                path="/"/>

              <Route exact path="/:code" component={CountryDetail} />
            </Switch>
          </div>
          {/* <Route exact path='/' component={CountryList}/> */}
        </div>
      </div>
    );
}

export default App;
