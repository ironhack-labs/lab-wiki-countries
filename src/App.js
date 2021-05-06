import './App.css';
import { Route, Switch } from 'react-router-dom';
import WikiCountries from './components/WikiCountries';
import React from 'react';

const NotFound = () => {
  return <h3>404 - Not Found</h3>;
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={WikiCountries} />
          <Route exact path="/:id" component={WikiCountries} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
