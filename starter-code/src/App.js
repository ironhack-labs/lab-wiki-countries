import React from 'react';
import './App.css';
import CountryList from './componets/countryList'
import CountryDetail from './componets/CountryDetail'
import { Switch, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row display">
          <div className="col-5">
            <CountryList />
          </div>
          <div className="col-7">
              <Route
                exact
                path="/:id"
                component={CountryDetail}
              />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
