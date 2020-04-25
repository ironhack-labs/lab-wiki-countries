import React, { Component } from 'react';
// import logo from './logo.svg';
// import ReactDOM, { render } from 'react-dom';

import './App.css';
import {Switch,Route} from 'react-router-dom';
import Home from './Home';

class App extends Component {
  state = { }
  componentDidMount(){ // window.onload happens on intial component mounts

  }

  render() {
  return (
    <div>
        <h1> Hello ? Are you human ? </h1>
         <nav></nav>
      
      <Switch>
      {/* general structure of Route */}
      {/* spread opp for props = shorthand for for anything in props i.e props.name */}
      {/* props passes Home */}

      <Route exact path='/' component={(props) => <Home{...props} /> }></Route>
      {/* Route is exactly this, path when Route launches, component what will show using this path, props is everything from react and dom, spread for ops is everything inside */}

      </Switch>
    </div>
  );
}
}

export default App;
