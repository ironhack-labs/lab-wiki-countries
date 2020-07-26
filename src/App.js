import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountriesDetails from './components/CountriesDetails';
import Home from './components/Home';



function App() {
  return (
    <div >
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-4">
            <CountriesList />
            </div>
            <Switch>
              <Route exact path="/" component={Home}>
              </Route>
              <Route exact path="/:id" render={(props) => <CountriesDetails  {...props} />} />
            </Switch>
          
        </div>
      </div>

    </div>
  );
}

export default App;
