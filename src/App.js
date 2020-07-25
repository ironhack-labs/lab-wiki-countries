import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route
            path="/:countrycode"
            render={(props) => <Home {...props} />}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
