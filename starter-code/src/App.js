import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
// COMPONENTS 
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Country from './countries.json';
import { Link } from 'react-router-dom';

class App extends Component {

  displayedCountry = () => {
    return (
      Country.map((count) => {
        return (
          <li><Link to={`/${count.flag}`}>{count.name.common}</Link></li> 
          // common is from json file 
      )} ) 
)}
 
  render() {
  return (
    <div>
        <h1> Home </h1>
        <Navbar /> {/* Not a switch statement, thus will display */}
      
      <div> {/*  container for holding both switch and list */}
        <div>
           {this.displayedCountry()} {/* json country list */}
        </div>
        <Switch>
          <Route exact path='/:id' component={(props) => <Home {...props} /> }></Route>
          <Route exact path='/About' component={(props) => <About {...props} /> }></Route>
          <Route exact path='/Contact' component={(props) => <Contact {...props} /> }></Route>
          

          {/* Route is exactly this, path when Route launches, component what will show using this path, 
            props is everything from react and dom, spread for ops is everything inside */}
          {/* general structure of Route */}
          {/* spread opp for props = shorthand for for anything in props i.e props.name */}
          {/* props passes Home */}
        </Switch>
        
        {/* Switch is going to Route the path until the path in URL matches*/}
        {/* if path matches, it will render [show] Home, etc*/}
      </div>

      
    </div>
  );
}
}

export default App;
// country will be outside of switch, needs to be displayed at all times
// make a container that holds both list and switch
// inside the div, list of names
// inside switch, switched 
// align later in order pass the statement to div

// anytime display an array, ue .map()
// to map over the array and return a list item
// country list should not mutate


// param chechllist
// route, declare param
// is pased to url