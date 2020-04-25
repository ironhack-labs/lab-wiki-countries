import React from 'react';
import Header from './components/Header'
import CountryList from './components/CountryList'
import CountryDetail from './components/CountryDetail'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Link, Switch, withRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row">
          <CountryList />
          <Router>
            <Route
              path="/:parametroDeUrl"
              children={(props) => <CountryDetail country={props.match.params.parametroDeUrl}/>}
            />
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
