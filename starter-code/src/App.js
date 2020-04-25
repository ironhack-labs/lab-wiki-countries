import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
// COMPONENTS 
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';


class App extends Component {
 
  render() {
  return (
    <div>
        <h1> Hello ? Are you human ? helllllllooo why arent you showing homie </h1>
         <nav>
         <Link to='/'>Home</Link> {/* to === attribute has to match the path given*/}
         <Link to='/About'>About</Link>
         <Link to ='/Contact'>Contact Us</Link>
         </nav>
         {/* Link to === a href, but with Switc component */}
      <Navbar />
      <Switch>
      <Route exact path='/' component={(props) => <Home{...props} /> }></Route>
      <Route exact path='/About' component={(props) => <About{...props} /> }></Route>
      <Route exact path='/Contact' component={(props) => <Contact{...props} /> }></Route>
      {/* Route is exactly this, path when Route launches, component what will show using this path, 
        props is everything from react and dom, spread for ops is everything inside */}
      {/* general structure of Route */}
      {/* spread opp for props = shorthand for for anything in props i.e props.name */}
      {/* props passes Home */}
      </Switch>

      {/* Switch is going to Route the path until the path in URL matches*/}
      {/* if path matches, it will render [show] Home, etc*/}
    </div>
  );
}
}

export default App;
