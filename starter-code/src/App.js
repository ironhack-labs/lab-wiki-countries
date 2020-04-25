import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
// COMPONENTS 
import Home from './Home';
import About from './About';
import Contact from './Contact';


class App extends Component {
  state = { }
  componentDidMount(){ // window.onload happens on intial component mounts

  }

  render() {
  return (
    <div>
        <h1> Hello ? Are you human ? </h1>
         <nav></nav>
          <Link></Link>
      <Switch>
      {/* general structure of Route */}
      {/* spread opp for props = shorthand for for anything in props i.e props.name */}
      {/* props passes Home */}

      <Route exact path='/' component={(props) => <Home{...props} /> }></Route>
      <Route exact path='/about' component={(props) => <About{...props} /> }></Route>
      <Route exact path='/contact' component={(props) => <Contact{...props} /> }></Route>
      {/* Route is exactly this, path when Route launches, component what will show using this path, props is everything from react and dom, spread for ops is everything inside */}
     
      </Switch>
    </div>
  );
}
}

export default App;
